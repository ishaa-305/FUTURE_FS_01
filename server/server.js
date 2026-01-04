const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// API
app.post("/contact", (req, res) => {
  console.log("Contact Data:", req.body);
  res.status(200).json({ success: true });
});

// Serve React build
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
