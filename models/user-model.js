const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs'); 


// mongoose.connect('mongodb://localhost:27017/scatch')
// we have create a separate file for mongoose connection in config folder



const userSchema = new mongoose.Schema({
     fullname: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: []
  },
  isadmin: Boolean,
  orders: {
    type: Array,
    default: []
  },
  contact: Number,
  picture: String
})




module.exports = mongoose.model('user', userSchema);