var mongoose = require('mongoose');
var scheduleSchema = require('../models/schedule');
var ObjectId = (require('mongoose').Types.ObjectId);

module.exports.postSchedule = function (request, res, next) {
    mongoose.model('scheduleModel', scheduleSchema).create({}, function (err, schedule) {
        if (err) return handleError(err);

        res
        .status(200)
        .json({ title: 'MyFitness', schedules: schedule});
    });
};

module.exports.postScheduleItem = function (request, res, next) {
    mongoose.model('scheduleModel', scheduleSchema).findById(request.body['scheduleId'], function (err, schedule) {
        if (err) return handleError(err);
        schedule.exercises.push(
            {
                exerciseName: request.body['exerciseName'],
                description: request.body['description'],
                set: request.body['set'],
                reps: request.body['reps']
            }
        )
        schedule.save();
        
        res
        .status(200)
        .json({ title: 'MyFitness', schedules: schedule});
    });


};

module.exports.deleteSchedule = function (request, res, next) {
    mongoose.model('scheduleModel', scheduleSchema).findByIdAndRemove(new ObjectId(request.body['scheduleId']), function (err, schedule) {
        if (err) return handleError(err);

        res
        .status(200)
        .json({ title: 'MyFitness', schedules: schedule});    });
};

module.exports.deleteScheduleExercise = function (request, res, next) {
    mongoose.model('scheduleModel', scheduleSchema).findById(new ObjectId(request.body['scheduleId']), function (err, schedule) {
        if (err) return handleError(err);
        schedule.exercises.pull(request.body['exerciseId']);
        schedule.save();

        res
        .status(200)
        .json({ title: 'MyFitness', schedules: schedule});    });
};

