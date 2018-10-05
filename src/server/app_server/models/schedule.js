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

var userSchema = new Schema({
    email: String, 
    password: String
})

module.exports = {
    scheduleSchema,
    userSchema
}
