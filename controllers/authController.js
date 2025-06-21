const userModel = require("../models/user-model");
const bcrypt = require('bcryptjs');  
const jwt = require('jsonwebtoken');
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function(req, res) {
  try {
    let { email, fullname, password } = req.body;

    if (!email || !fullname || !password) {
      return res.status(400).send("All fields are required");
    }

    let user = await userModel.findOne({ email: email });
    if (user) return res.status(401).send("You already have an account, please login");

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, async function(err, hash) {
        if (err) {
          return res.status(500).send("Error hashing password");
        } else {
          let user = await userModel.create({
            email,
            password: hash,
            fullname,
          });

          let token = generateToken(user);
          res.cookie("token", token);
          res.send("User created successfully");
          console.log("Generated Token:", token);
        }
      });
    });
  } catch (err) {
    console.log("Error in registerUser:", err.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.loginUser = async function(req, res) {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    let user = await userModel.findOne({ email: email }); // ✅ added await
    if (!user) return res.status(401).send("Email or password incorrect"); // ✅ fixed status code

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).send("Error comparing passwords");
      }

      if (result) {
        let token = generateToken(user);
        res.cookie("token", token);
        return res.send("Login successful");
      } else {
        return res.status(401).send("Email or password incorrect");
      }
    });
  } catch (err) {
    console.log("Error in loginUser:", err.message);
    res.status(500).send("Internal Server Error");
  }
};
