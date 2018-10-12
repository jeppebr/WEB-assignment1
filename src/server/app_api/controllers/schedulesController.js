var mongoose = require('mongoose');
var scheduleSchema = require('../models/schedule');
var ObjectId = (require('mongoose').Types.ObjectId);
const jwt = require('../jwt/jwt')

module.exports.getSchedules = function(req, res, next) {
    var Schedule = mongoose.model('scheduleModel', scheduleSchema);
    Schedule.find({}, '', function (err, schedules) {
        if (err) return handleError(err);
        res.status(200).json(schedules);
    });
}

module.exports.postSchedule = function (req, res, next) {
    let shouldTerminate = false 
    jwt.verifyToken(req, res, (payload,err) =>{
        if (err){
            console.log("returning error")
            shouldTerminate = true; 
            return res.status(401).send("Request is not authorized")
        }
    })
    if (shouldTerminate){ return }

    mongoose.model('scheduleModel', scheduleSchema).create({}, function (err, schedule) {
        if (err) return handleError(err);

        res.status(200).json(schedule);
    });
};

module.exports.deleteSchedule = function (request, res, next) {
    
    mongoose.model('scheduleModel', scheduleSchema).findById(request.params.scheduleId, function (err, schedule) {
        if (err) return handleError(err);

        schedule.remove();

        res.status(200).json();
    });
};
