import express from 'express';
import { 
  logVisitor,
  getVisitors,
  getVisitorStats 
} from '../controllers/visitorController.js';

const router = express.Router();

// Track new visitor (called from frontend)
router.post('/', logVisitor);

// Get visitor list for dashboard table
router.get('/', getVisitors);

// Get aggregated stats for dashboard cards
router.get('/stats', getVisitorStats);

export default router;