import express from "express";
import { 
  getProjects, 
  createProject, 
  deleteProject,
  updateProject 
} from "../controllers/projectController.js";
import { verifyKeyRoute } from "../controllers/authController.js"; // Import the route handler

const router = express.Router();

// Public routes
router.get("/", getProjects);

// Protected routes - chain verification first
router.post("/", 
  async (req, res, next) => {
    await verifyKeyRoute(req, res, () => {
      // Only proceed if verification succeeds
      if (!res.headersSent) next(); 
    });
  }, 
  createProject
);

router.delete("/:id", 
  async (req, res, next) => {
    await verifyKeyRoute(req, res, () => {
      if (!res.headersSent) next();
    });
  },
  deleteProject
);

router.put("/:id",
  async (req, res, next) => {
    await verifyKeyRoute(req, res, () => {
      if (!res.headersSent) next();
    });
  },
  updateProject
);

export default router;