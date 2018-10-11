var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var scheduleSchema = require('../models/schedule');
var exerciseLogSchema = require('../models/exerciseLog');

var userSchema = new Schema({
    email: String,
    password: String,
    schedules: [scheduleSchema],
    exerciseLogs: [exerciseLogSchema],
})

module.exports = userSchema;
