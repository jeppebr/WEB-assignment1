var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
    schedule: { type: Schema.Types.ObjectId, ref: 'Schedule' },
    exerciseName: String,
    description: String,
    set: Number,
    reps: Number
});

module.exports = exerciseSchema;