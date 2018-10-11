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



    // TODO return a JWT token to the user
    
    // If user has been succesfully saved 
    let user = req.body.username
    let payload = { subject: user._id }
    let token = jwt.sign(payload, 'secretkeythatisverylongandanoying')
    res.status(200).send({token})

    // res
    // .status(200)
    // .json({"message" : "Register request received"});
};