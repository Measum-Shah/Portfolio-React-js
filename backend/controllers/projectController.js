import Project from "../models/project.js";


// Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    // Ensure link & github are always present in response
    const normalizedProjects = projects.map((p) => ({
      _id: p._id,
      title: p.title,
      description: p.description,
      techStack: p.techStack,
      image: p.image,
      link: p.link || "",     // ✅ fallback if missing
      github: p.github || "", // ✅ fallback if missing
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
    }));

    res.status(200).json({
      success: true,
      count: normalizedProjects.length,
      data: normalizedProjects,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

// Create new project
export const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({
      success: true,
      data: project
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Validation failed",
      error: err.message
    });
  }
};

// Update existing project
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    res.status(200).json({
      success: true,
      data: project
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Update failed",
      error: err.message
    });
  }
};

// Delete project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully"
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Delete failed",
      error: err.message
    });
  }
};