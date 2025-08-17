import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema({
  ip: { type: String, required: true, index: true },
  userAgent: String,
  referrer: String,
  linkedinUsername: String,
  deviceType: { type: String, enum: ['mobile', 'desktop'] },
  visitCount: { type: Number, default: 1 },
  firstVisit: { type: Date, default: Date.now },
  lastVisit: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Visitor', visitorSchema);