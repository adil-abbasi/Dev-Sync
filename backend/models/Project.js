const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, maxLength: 80 },
  description: { type: String, required: true, maxLength: 3000 },
  budget: Number,
  category: String,
  thumbnail: String,
  video: String,
  files: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", projectSchema);