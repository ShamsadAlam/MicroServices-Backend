// documentModel.js
const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  artifactId: { type: String, required: true }, // Connect to artifact
});

module.exports = mongoose.model("Document", documentSchema);
