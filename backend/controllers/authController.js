export const verifyKeyRoute = async (req, res, next) => {
  try {
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

    // If verification passes, continue to next middleware
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error during verification"
    });
  }
};