var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var exerciseSchema = require('../models/exercise');

var scheduleSchema = new Schema({
    exercises: [exerciseSchema]
});

module.exports = scheduleSchema;