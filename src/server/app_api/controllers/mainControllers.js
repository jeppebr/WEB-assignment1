var mongoose = require('mongoose');
var scheduleSchema = require('../models/schedule');

module.exports.index = function(req, res, next) {
    var Schedule = mongoose.model('scheduleModel', scheduleSchema);
    Schedule.find({}, 'scheduleName exercises', function (err, schedules) {
        if (err) return handleError(err);

        res
        .status(200)
        .json(schedules);
    });
}


