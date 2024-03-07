// documentController.js
const Document = require("./Models/documentModel");

const createDocument = async (data) => {
  // Your document creation logic here
  const document = new Document(data);
  return await document.save();
};

module.exports = {
  createDocument,
};
