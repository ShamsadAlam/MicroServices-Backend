// documentRoutes.js
const express = require("express");
const router = express.Router();
const documentController = require("./Controllers/documentController");

router.post("/createDocument", async (req, res) => {
  const data = req.body;
  try {
    const document = await documentController.createDocument(data);
    res.json(document);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
