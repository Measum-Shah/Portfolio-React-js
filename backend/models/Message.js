import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      maxlength: 200
    },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    // Auto-expire after 7 days using MongoDB TTL index
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      index: { expires: 0 } // expireAfterSeconds = 0 (expire exactly at expiresAt)
    }
  },
  { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);
