// signatureRoutes.js
const express = require("express");
const router = express.Router();
const signatureController = require("/Controllers/signatureController");

router.post("/generateSignature", (req, res) => {
  const artifact = req.body.artifact;
  const signature = signatureController.generateSignature(artifact);
  res.json({ signature });
});

module.exports = router;
