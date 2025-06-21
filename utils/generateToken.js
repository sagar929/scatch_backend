const jwt = require('jsonwebtoken');
const procecss = require("process");

const generateToken = (user)=>{
    return  jwt.sign({email,id:user._id},procecss.env.JWT_KEY)
}

module.exports.generateToken = generateToken;