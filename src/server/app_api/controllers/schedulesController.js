var mongoose = require('mongoose');
var scheduleSchema = require('../models/schedule');
var ObjectId = (require('mongoose').Types.ObjectId);

module.exports.getSchedules = function(req, res, next) {
    var Schedule = mongoose.model('scheduleModel', scheduleSchema);
    Schedule.find({}, '', function (err, schedules) {
        if (err) return handleError(err);

        res
            .status(200)
            .json(schedules);
    });
}

module.exports.postSchedule = function (request, res, next) {
    mongoose.model('scheduleModel', scheduleSchema).create({}, function (err, schedule) {
        if (err) return handleError(err);

        res
        .status(200)
        .json(schedule);
    });
};

module.exports.deleteSchedule = function (request, res, next) {
    mongoose.model('scheduleModel', scheduleSchema).findOneAndDelete(new ObjectId(request.params.scheduleId), function (err, schedule) {
        if (err) return handleError(err);

        res
        .status(200)
        .json(schedule);
    });
};
