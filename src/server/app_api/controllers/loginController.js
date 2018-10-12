var userSchema = require('../models/user');
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken')


module.exports.loginCreate = function(req, res) {
    mongoose.model('userModel', userSchema).find({username: req.body.username}, function (err, users) {
        if (err) return next(err);

        if (users[0] !== undefined) {
            const user = users[0];
            if(user.validatePassword(req.body.password)){
                let payload = { subject: user.username };
                let token = jwt.sign(payload, 'secret');

                user.token = token;
                user.save();

                res.status(200).json(token);
            }
        }

        res.status(401).send();
    });
};

module.exports.loginGetUser = function (req, res) {
    mongoose.model('userModel', userSchema).find({username: req.params.username}, "_id username schedules exerciseLogs", function(err, user) {

        if (err) return handleError(err);

        res.status(200).json(user[0]);
    });
};