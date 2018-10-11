var mongoose = require('mongoose');
var scheduleSchema = require('../models/schedule');
var exerciseSchema = require('../models/exercise');

module.exports.getExercises = function(req, res, next) {
    mongoose.model('exerciseModel', exerciseSchema).find({}, '', function (err, exercises) {
        if (err) return handleError(err);

        res.status(200).json(exercises);
    });
}

module.exports.postExercise = function (request, res, next) {
    mongoose.model('scheduleModel', scheduleSchema).findById(request.params.scheduleId, function (err, schedule) {
        if (err) return handleError(err);

        mongoose.model('exerciseModel', exerciseSchema).create({}, function (err, exercise) {
            if (err) return handleError(err);

            exercise.schedule = schedule._id;
            exercise.exerciseName = request.body['exerciseName'];
            exercise.description = request.body['description'];
            exercise.set = request.body['set'];
            exercise.reps = request.body['reps'];

            schedule.exercises.push(exercise);
            schedule.save();

            res.status(200).json(exercise);
        });
    });
};

module.exports.deleteExercise = function (request, res, next) {
    mongoose.model('scheduleModel', scheduleSchema).findById(request.params.scheduleId, function (err, schedule) {
        if (err) return handleError(err);

        schedule.exercises.id(request.params.exerciseId).remove();
        schedule.save();
        res.status(200).json(schedule);
    });
};

