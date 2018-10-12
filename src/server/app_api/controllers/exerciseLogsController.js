var mongoose = require('mongoose');
var exerciseLogSchema = require('../models/exerciseLog');
var userSchema = require('../models/user');
const jwt = require('../jwt/jwt')

module.exports.postExerciseLog = function (req, res) {
    if(!jwt.verifyToken(req)){
        res.status(401).send("Request is not authorized");
        return;
    }

    mongoose.model('userModel', userSchema).findById(req.params.userId, function (err, user) {
        mongoose.model('exerciseLogModel', exerciseLogSchema).create({}, function (err, exerciseLog) {
            if (err) return handleError(err);

            exerciseLog.dateTime = req.body['dateTime'];
            exerciseLog.exerciseName = req.body['exerciseName'];

            user.exerciseLogs.push(exerciseLog);
            user.save();

            res.status(200).json(exerciseLog);
        });
    });
};