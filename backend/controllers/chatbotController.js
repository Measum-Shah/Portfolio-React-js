import { getChatResponse } from '../models/chatbotModel.js';

export async function handleChatRequest(req, res) {
  try {
    const { message } = req.body;

    const result = await getChatResponse(message);

    res.json({ result });
  } catch (error) {
    console.error("Chatbot error:", error);
    res.status(500).json({ error: "Failed to process chat request" });
  }
}

export function handleKeyRequest(req, res) {
  const key = process.env.GEMINI_API_KEY;
  console.log(`key: ${key}`);
  res.json({ key });
}