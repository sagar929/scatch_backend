// always try  to make a differnt file for owner like we are gonna do in this caseconst mongoose = require('mongoose');
const mongoose = require('mongoose');
 

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  products: {
    type: Array,
    default: []
  },
  picture: String,
  gstin: String
})




module.exports = mongoose.model('user', userSchema);