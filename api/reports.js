const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function dbConnect() {
  if (!MONGODB_URI) return null;
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false }).then(m => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const auditSchema = new mongoose.Schema({
  executionDate: { type: Date, default: Date.now },
  durationMs: Number,
  pagesTested: Number,
  pagesPassed: Number,
  pagesFailed: Number,
  healthScore: Number,
  securityScore: Number,
  performanceScore: Number,
  seoScore: Number,
  criticalIssues: Number,
  status: String,
  details: mongoose.Schema.Types.Mixed
});

const AuditLog = mongoose.models.AuditLog || mongoose.model('AuditLog', auditSchema);

module.exports = async function (req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  
  // Basic Auth (For production, implement real JWT or session)
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Unauthorized. Provide ADMIN_PASSWORD bearer token.' });
  }

  try {
    if (!MONGODB_URI) throw new Error('Database not connected');
    await dbConnect();
    
    // Fetch last 10 audits
    const logs = await AuditLog.find().sort({ executionDate: -1 }).limit(10);
    return res.status(200).json(logs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
