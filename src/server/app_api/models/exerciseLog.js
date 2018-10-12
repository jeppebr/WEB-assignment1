var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var exerciseSchema = require('../models/exercise');

var exerciseLogSchema = new Schema({
    exercise: exerciseSchema,
});

module.exports = exerciseLogSchema;