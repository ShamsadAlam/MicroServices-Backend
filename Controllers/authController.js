// authController.js
const jwt = require("jsonwebtoken");
const User = require("./Models/userModel");

const generateToken = (user) => {
  const payload = {
    userId: user._id,
    username: user.username,
  };
  return jwt.sign(payload, "your-secret-key", { expiresIn: "1h" });
};

module.exports = {
  generateToken,
};
