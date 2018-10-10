var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var exerciseSchema = require('../models/exercise');

var scheduleSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    exercises: [exerciseSchema]
});

module.exports = scheduleSchema;