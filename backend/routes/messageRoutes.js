import { Router } from "express";
import {
  createMessage,
  listMessages,
  deleteMessage
} from "../controllers/messageController.js";

const router = Router();

// Public (used by Contact.jsx)
router.post("/", createMessage);

// Admin-only
router.get("/",  listMessages);
router.delete("/:id", deleteMessage);

export default router;
