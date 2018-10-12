var userSchema = require('../models/user');
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

module.exports.registerCreate = function(req, res) {
    mongoose.model('userModel', userSchema).create({}, function (err, user) {
        if (err) return handleError(err);

        user.username = req.body.username;
        user.setPassword(req.body.password);
        user.save();

        let payload = { subject: user.username }
        let token = jwt.sign(payload, 'secretkeythatisverylongandanoying')
        res.status(200).send({token})
    });
};