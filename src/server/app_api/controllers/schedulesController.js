var mongoose = require('mongoose');
var scheduleSchema = require('../models/schedule');

module.exports.getAll = function(req, res) {

    var Schedule = mongoose.model('scheduleModel', scheduleSchema);
    Schedule.find({}, 'scheduleName exercises', function (err, schedules) {
        if (err) return handleError(err);
        res.json(schedules);
    });
}