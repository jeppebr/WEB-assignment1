var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseLogSchema = new Schema({
    exerciseName: String,
    dateTime: Number
});

module.exports = exerciseLogSchema;