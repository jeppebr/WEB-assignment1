var mongoose = require('mongoose');
var scheduleSchema = require('../models/schedule');
var exerciseSchema = require('../models/exercise');
const jwt = require('../jwt/jwt')

module.exports.getExercises = function(req, res, next) {
    mongoose.model('exerciseModel', exerciseSchema).find({}, '', function (err, exercises) {
        if (err) return handleError(err);

        res.status(200).json(exercises);
    });
}

module.exports.postExercise = function (request, res, next) {
    //code that check token -start
    let shouldTerminate = false 
    jwt.verifyToken(request, res, (payload,err) =>{
        if (err){
            console.log("returning error")
            shouldTerminate = true; 
            return res.status(401).send("Request is not authorized")
        }
    })
    if (shouldTerminate){ return }

      //code that check token -end

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
    //code that check token -start
    let shouldTerminate = false 
    jwt.verifyToken(request, res, (payload,err) =>{
        if (err){
            console.log("returning error")
            shouldTerminate = true; 
            return res.status(401).send("Request is not authorized")
        }
    })
    if (shouldTerminate){ return }

      //code that check token -end
 
    mongoose.model('scheduleModel', scheduleSchema).findById(request.params.scheduleId, function (err, schedule) {
        if (err) return handleError(err);

        schedule.exercises.id(request.params.exerciseId).remove();
        schedule.save();
        res.status(200).json(schedule);
    });
};

