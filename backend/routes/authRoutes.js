import express from 'express';
const router = express.Router();

// Key verification route
router.post('/verify', (req, res) => {
  const key = req.headers["x-admin-key"];
  
  if (!key) {
    return res.status(400).json({ 
      success: false,
      message: "No key provided" 
    });
  }

  if (key !== process.env.ADMIN_KEY) {
    return res.status(403).json({ 
      success: false,
      message: "Invalid key" 
    });
  }

  res.status(200).json({ 
    success: true,
    message: "Key verified successfully" 
  });
});

export default router;