const mongoose = require("mongoose");

// the url that i gave here is valid untill i m hosting this in the local server
// when i will host this in the cloud then i will change this url to the cloud url
// so we will use the dynamic url for the connection
mongoose.connect("mongodb://localhost:27017/scatch")
.then(function() {
    console.log("Connected to MongoDB");
})
.catch(function(err) {
    console.error("Error connecting to MongoDB:", err);
});

module.exports = mongoose.connection;   