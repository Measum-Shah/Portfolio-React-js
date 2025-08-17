import express from 'express';
import { handleChatRequest, handleKeyRequest } from '../controllers/chatbotController.js';

const router = express.Router();

router.post('/chat', handleChatRequest);
router.get('/key', handleKeyRequest);

export default router;