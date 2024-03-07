// server.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const documentRoutes = require("./Routes/documentRoutes");
const userRoutes = require("./Routes/authRoutes");
const signRoutes = require("./Routes/signatureRoutes");

mongoose.connect("mongodb://127.0.0.1:27017/document-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const port = 3002;

app.use(bodyParser.json());

app.use("/auth", userRoutes);
app.use("/sign", signRoutes);
app.use("/document", documentRoutes);

app.listen(port, () => {
  console.log(`Document Service listening at http://localhost:${port}`);
});
