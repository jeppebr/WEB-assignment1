const schema = require('../models/schedule')
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken')


module.exports.registerCreate = function(req, res) {
    let userData = req.body 
    //var userSchema = mongoose.model('userModel', schema.userSchema);
    // TODO save user data in database 
    console.log("Registering users")
    console.log(req.body)
    
    console.log(req.body.username)
    console.log(req.body.password)
    
    // If user has been succesfully saved 
    let username = req.body.username
    // TODO use the database identifier instead of username here, since username might not be unique
    console.log(username._id) // <-- like this 
    
    let payload = { subject: username }
    let token = jwt.sign(payload, 'secretkeythatisverylongandanoying')
    res.status(200).send({token})

    // res
    // .status(200)
    // .json({"message" : "Register request received"});
};