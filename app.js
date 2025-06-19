const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connection");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Set view engine
app.set("view engine", "ejs");

// Route
app.use("/owners",ownersRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
