import Message from "../models/Message.js";

/**
 * POST /api/messages
 * Public endpoint used by Contact.jsx
 */
export async function createMessage(req, res) {
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ message: "name, email and message are required" });
    }

    const doc = await Message.create({ name, email, message });
    return res.status(201).json({ data: doc });
  } catch (err) {
    console.error("Create message error:", err);
    return res.status(500).json({ message: "Failed to save message" });
  }
}

/**
 * GET /api/messages
 * Admin only — list messages (newest first)
 */
export async function listMessages(req, res) {
  try {
    const data = await Message.find().sort({ createdAt: -1 }).lean();
    return res.json({ data });
  } catch (err) {
    console.error("List messages error:", err);
    return res.status(500).json({ message: "Failed to fetch messages" });
  }
}

/**
 * DELETE /api/messages/:id
 * Admin only — delete a message immediately
 */
export async function deleteMessage(req, res) {
  try {
    const { id } = req.params;
    const existed = await Message.findByIdAndDelete(id);
    if (!existed) return res.status(404).json({ message: "Message not found" });
    return res.json({ ok: true });
  } catch (err) {
    console.error("Delete message error:", err);
    return res.status(500).json({ message: "Failed to delete message" });
  }
}
