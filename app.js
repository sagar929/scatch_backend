const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");  
const usersRouter = require("./routes/usersRouter");
const indexRouter = require("./routes/index");
const dotenv = require("dotenv").config();
const flash = require("connect-flash");
const expressSession = require("express-session");

require("dotenv").config();

const db  =  require("./config/mongoose-connection");
// Connect to MongoDB


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(flash());
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET
  })
)

// Set view engine
app.set("view engine", "ejs");

// Route
app.use("/", indexRouter);
app.use("/owners",ownersRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
