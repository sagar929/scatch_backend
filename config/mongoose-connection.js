const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose")
const config =  require("config")
// $env:DEBUG = "development:*"
// after creating this dbgr then use this command for windows

// the url that i gave here is valid untill i m hosting this in the local server
// when i will host this in the cloud then i will change this url to the cloud url
// so we will use the dynamic url for the connection


// also for this utl that we have used here for this we make a development,json and deal it there
mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function() {
    dbgr("Connected to MongoDB");
})
.catch(function(err) {
    dbgr("Error connecting to MongoDB:", err);
});

module.exports = mongoose.connection;   