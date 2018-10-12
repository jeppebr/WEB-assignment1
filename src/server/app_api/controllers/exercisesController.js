var mongoose = require('mongoose');
var scheduleSchema = require('../models/schedule');
var exerciseSchema = require('../models/exercise');
const jwt = require('../jwt/jwt')

module.exports.getExercises = function(req, res) {
    mongoose.model('exerciseModel', exerciseSchema).find({}, '', function (err, exercises) {
        if (err) return handleError(err);

        res.status(200).json(exercises);
    });
}

module.exports.postExercise = function (req, res) {
    if(!jwt.verifyToken(req)){
        res.status(401).send("Request is not authorized");
        return;
    }

    mongoose.model('scheduleModel', scheduleSchema).findById(req.params.scheduleId, function (err, schedule) {
        if (err) return handleError(err);

        mongoose.model('exerciseModel', exerciseSchema).create({}, function (err, exercise) {
            if (err) return handleError(err);

            exercise.schedule = schedule._id;
            exercise.exerciseName = req.body['exerciseName'];
            exercise.description = req.body['description'];
            exercise.set = req.body['set'];
            exercise.reps = req.body['reps'];

            schedule.exercises.push(exercise);
            schedule.save();

            res.status(200).json(exercise);
        });
    });
};

module.exports.deleteExercise = function (req, res) {
    if(!jwt.verifyToken(req)){
        res.status(401).send("Request is not authorized");
        return;
    }
 
    mongoose.model('scheduleModel', scheduleSchema).findById(req.params.scheduleId, function (err, schedule) {
        if (err) return handleError(err);

        if(schedule != null){
            schedule.exercises.id(req.params.exerciseId).remove();
            schedule.save();
        }

        res.status(200).json(schedule);
    });
};

