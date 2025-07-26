const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
};