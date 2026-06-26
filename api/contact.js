import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (!MONGODB_URI) {
    console.warn('[DB] MONGODB_URI is not defined. Skipping database connection.');
    return null;
  }
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    console.log('[DB] Connecting to MongoDB...');
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false }).then(m => {
      console.log('[DB] Successfully connected to MongoDB.');
      return m;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error('[DB] MongoDB Connection Error:', e);
    throw e;
  }
  return cached.conn;
}

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: 'New' },
  source: { type: String, default: 'Website Contact Form' },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default async function (req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') return res.status(200).end();
  
  if (req.method !== 'POST') {
    console.warn(`[API] Invalid method called: ${req.method}`);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  console.log('[API] New contact form submission received.');

  try {
    const { name, company, email, phone, subject, message } = req.body;
    
    // 1. Validate Input
    if (!name || !company || !email || !subject || !message) {
      console.warn('[API] Validation failed: Missing required fields.');
      return res.status(400).json({ message: 'Missing required fields: name, company, email, subject, or message.' });
    }

    // 2. Save Lead to Database
    if (MONGODB_URI) {
      try {
        await dbConnect();
        const newContact = new Contact({ name, company, email, phone, subject, message });
        await newContact.save();
        console.log(`[DB] Successfully saved lead from ${email}.`);
      } catch (dbError) {
        console.error('[DB] Failed to save lead:', dbError);
      }
    } else {
      console.warn('[DB] Skipping DB save due to missing MONGODB_URI.');
    }

    // 3. Configure Email Transport
    if (!process.env.EMAIL_PASS) {
      console.warn('[SMTP] EMAIL_PASS is not defined. Email notifications will not be sent.');
      return res.status(200).json({ 
        message: 'Transmission Successful (Dry Run - No SMTP/DB config)', 
        success: true, 
        warning: 'Backend executed successfully, but missing environment credentials prevented email dispatch.'
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: 'i3diontech@gmail.com', pass: process.env.EMAIL_PASS }
    });

    const adminMailOptions = {
      from: '"I3DION Website" <i3diontech@gmail.com>',
      to: 'i3diontech@gmail.com',
      subject: `New Project Enquiry: ${subject} (${company})`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    const visitorMailOptions = {
      from: '"I3DION Tech" <i3diontech@gmail.com>',
      to: email,
      subject: 'Thank you for your enquiry - I3DION',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #00f0ff;">Thank You, ${name}!</h2>
          <p>We have successfully received your enquiry regarding your project at <strong>${company}</strong>.</p>
          <p>Our technology integration officers are reviewing your request and will get back to you shortly.</p>
          <br>
          <p>Best Regards,</p>
          <p><strong>The I3DION Team</strong></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #888;">This is an automated message. Please do not reply directly to this email.</p>
        </div>
      `
    };

    // 4. Send Emails
    try {
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(visitorMailOptions)
      ]);
      console.log(`[SMTP] Successfully sent emails for lead ${email}.`);
    } catch (emailError) {
      console.error('[SMTP] Failed to send emails:', emailError);
      return res.status(500).json({ message: 'Failed to dispatch email notifications. Please verify SMTP credentials.' });
    }

    // 5. Return Success Response
    console.log('[API] Workflow completed successfully.');
    return res.status(200).json({ message: 'Transmission Successful', success: true });

  } catch (error) {
    console.error('[API] Critical Server Error:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
