const schema = require('../models/schedule')
var mongoose = require('mongoose');


module.exports.registerCreate = function(req, res) {
    let userData = req.body 
    //var userSchema = mongoose.model('userModel', schema.userSchema);
    // TODO save user data in database 
    console.log("Registering users")
    console.log(req.body)
    
    console.log(req.body.username)
    console.log(req.body.password)

    res
    .status(200)
    .json({"message" : "Register request received"});
};