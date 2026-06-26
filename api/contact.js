const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

// Connect to MongoDB using environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Global caching for the mongoose connection in serverless environments
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (!MONGODB_URI) return null;
  
  if (cached.conn) {
    return cached.conn;
  }
  
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
  return cached.conn;
}

// Define the Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Avoid OverwriteModelError in hot-reloading serverless environment
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

module.exports = async function (req, res) {
  // Add CORS headers for testing
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, company, email, message } = req.body;

    if (!name || !company || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (MONGODB_URI) {
      // Connect to the database
      await dbConnect();

      // Create a new contact entry
      const newContact = new Contact({
        name,
        company,
        email,
        message,
      });

      await newContact.save();
    } else {
      // If no DB is configured, we simulate a successful transmission
      console.log('No MONGODB_URI configured. Received form data:', { name, company, email, message });
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'i3diontech@gmail.com',
        pass: process.env.EMAIL_PASS
      }
    });

    // Admin Notification Email
    const adminMailOptions = {
      from: '"I3Dion Website" <i3diontech@gmail.com>',
      to: 'i3diontech@gmail.com',
      subject: `New Project Enquiry from ${name} at ${company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Visitor Auto-Reply Email
    const visitorMailOptions = {
      from: '"I3Dion Tech" <i3diontech@gmail.com>',
      to: email,
      subject: 'Thank you for your enquiry - I3Dion',
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>We have successfully received your enquiry regarding your project at ${company}.</p>
        <p>Our technology integration officers are reviewing your request and will get back to you shortly.</p>
        <br>
        <p>Best Regards,</p>
        <p><strong>The I3Dion Team</strong></p>
      `
    };

    // Send emails concurrently if credentials exist
    if (process.env.EMAIL_PASS) {
      try {
        await Promise.all([
          transporter.sendMail(adminMailOptions),
          transporter.sendMail(visitorMailOptions)
        ]);
        console.log('Emails sent successfully.');
      } catch (emailError) {
        console.error('Error sending emails:', emailError);
      }
    } else {
      console.log('EMAIL_PASS not configured. Emails were not sent.');
    }

    // Send successful response
    return res.status(200).json({ message: 'Transmission Successful', success: true });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};
