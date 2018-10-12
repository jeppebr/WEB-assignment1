var mongoose = require('mongoose');
const User = require('../models/user');


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


// Jeppe registercontroller
module.exports.postSchedule = function (request, res, next) {
    mongoose.model('scheduleModel', scheduleSchema).create({}, function (err, schedule) {
        if (err) return handleError(err);

        res
        .status(200)
        .json(schedule);
    });
};


//--
module.exports.registerCreateHash = function(req, res) {

    let user = new User({username: req.body.username});
    user.setPassword(req.body.password);
    console.log(req.body.password);
    console.log(user.salt);
    console.log(user.password);

    user.create({}, function (err, user) {
        if (err) return handleError(err);

        res
        .status(200)
        .json(user);
    });
/* 
    user.save(function(err){
        if(err){
            res.status(404).json({"message:": err})
        } else{
            status(200).json({"token":"123"})
        }
    }); */
};
