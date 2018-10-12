var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var scheduleSchema = require('../models/schedule');
var exerciseLogSchema = require('../models/exerciseLog');
var crypto = require("crypto");

var userSchema = new Schema({
    username: String,
    password: String,
    token: String,
    salt: String,
    schedules: [scheduleSchema],
    exerciseLogs: [exerciseLogSchema],
})

userSchema.methods.setPassword = function (clearPassword) {
    this.salt = crypto.randomBytes(256).toString('hex');
    this.password = crypto.pbkdf2Sync(clearPassword, this.salt, 100000, 64, 'sha512').toString('hex');
};

userSchema.methods.validatePassword = function (password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 100000, 64, 'sha512').toString('hex');
    return this.password === hash;
};

module.exports = userSchema;



