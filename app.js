const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Set view engine
app.set("view engine", "ejs");

// Route
app.get("/", (req, res) => {
  res.send("hey");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
