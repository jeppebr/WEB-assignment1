var userSchema = require('../models/user');
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken')


module.exports.loginCreate = function(req, res) {
    mongoose.model('userModel', userSchema).find({username: req.body.username}, function (err, user) {
        if (err) return next(err);

        if (user[0] === undefined) {
            res.status(401).send();
        }

        user = user[0];
        if(user.validatePassword(req.body.password)){
            let payload = { subject: user.username };
            let token = jwt.sign(payload, 'secret');
            res.status(200).send({token});
        }

        res.status(401).send();
    });
};