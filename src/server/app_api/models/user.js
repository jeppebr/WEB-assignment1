var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var scheduleSchema = require('../models/schedule');
var exerciseLogSchema = require('../models/exerciseLog');
var crypto = require("crypto");

var userSchema = new Schema({
    username: String,
    password: String,
    salt: String,
    schedules: [scheduleSchema],
    exerciseLogs: [exerciseLogSchema],
})

 userSchema.methods.setPassword = function(clearPassword){
    this.salt = crypto.randomBytes(saltBytes).toString('hex');
    this.password = crypto.pbkdf2Sync(clearPassword, this.salt, iterations, keylen,
        digest).toString('hex');
};

module.exports = mongoose.model('user', userSchema);

 userSchema.methods.validPassword= function(password) {
    lethash= crypto.pbkdf2Sync(password, this.salt, iterations, keylen,digest)
    .toString('hex');
    return this.hash=== hash;
};




