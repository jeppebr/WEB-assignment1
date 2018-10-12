var mongoose = require('mongoose');
var scheduleSchema = require('../models/schedule');
const jwt = require('../jwt/jwt')

module.exports.getSchedules = function(req, res) {
    var Schedule = mongoose.model('scheduleModel', scheduleSchema);
    Schedule.find({}, '', function (err, schedules) {
        if (err) return handleError(err);

        res.status(200).json(schedules);
    });
}

module.exports.postSchedule = function (req, res) {
    if(!jwt.verifyToken(req)){
        res.status(401).send("Request is not authorized");
        return;
    }

    mongoose.model('scheduleModel', scheduleSchema).create({}, function (err, schedule) {
        if (err) return handleError(err);

        res.status(200).json(schedule);
    });
};

module.exports.deleteSchedule = function (req, res) {
    mongoose.model('scheduleModel', scheduleSchema).findById(req.params.scheduleId, function (err, schedule) {
        if (err) return handleError(err);

        if (schedule != null){
            schedule.remove();
        }
        res.status(200).json();
    });
};
