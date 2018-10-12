const schema = require('../models/schedule')
var mongoose = require('mongoose');
var jwt = require('../jwt/jwt')

module.exports.registerCreate = function(req, res) {
    let userData = req.body 
    //var userSchema = mongoose.model('userModel', schema.userSchema);
    // TODO save user data in database 
    console.log("Registering users")
    console.log(req.body)
    
    console.log(req.body.username)
    console.log(req.body.password)
    
    // If user has been succesfully saved 
    let id = req.body.username
    jwt.sign(id, (token) => {
        res.status(200).send({token})
    })
    // TODO use the database identifier instead of username here, since username might not be unique
    //console.log(username._id) // <-- like this 
};