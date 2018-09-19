var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleSchema = new Schema({
    exercises: [
        {
            exerciseName: String,
            description: String,
            set: Number,
            reps: Number
        }
    ]
});

module.exports = scheduleSchema;