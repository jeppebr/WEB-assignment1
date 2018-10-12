var mongoose = require('mongoose');
var exerciseLogSchema = require('../models/exerciseLog');
var userSchema = require('../models/user');
const jwt = require('../jwt/jwt')

module.exports.postExerciseLog = function (request, res, next) {
    mongoose.model('userModel', userSchema).findById(request.params.userId, function (err, user) {
        mongoose.model('exerciseLogModel', exerciseLogSchema).create({}, function (err, exerciseLog) {
            if (err) return handleError(err);

            exerciseLog.dateTime = request.body['dateTime'];
            exerciseLog.exerciseName = request.body['exerciseName'];

            user.exerciseLogs.push(exerciseLog);
            user.save();

            res.status(200).json(exerciseLog);
        });
    });
};