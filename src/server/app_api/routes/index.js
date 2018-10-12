const express = require('express');
const router = express.Router();
const ctrlLocations= require('../controllers/locations');
const ctrlSchedules= require('../controllers/schedulesController');
const ctrlExercises= require('../controllers/exercisesController');
const ctrlLogin= require('../controllers/login');
const ctrlRegister = require('../controllers/register');

// locations
router
.route('/locations')
    .get(ctrlLocations.locationsCreate);

 //schedules
router.route("/schedules")
    .get(ctrlSchedules.getSchedules)
    .post(ctrlSchedules.postSchedule);

router.route("/schedules/:scheduleId")
    .delete(ctrlSchedules.deleteSchedule);

//exercises
router.route("/schedules/:scheduleId/exercises")
    .post(ctrlExercises.postScheduleItem)
router.route("/schedules/:scheduleId/exercises/:exerciseId")
    .delete(ctrlExercises.deleteScheduleExercise);

router.route('/login')
    .post(ctrlLogin.loginCreate);

router.route('/register')
.post(ctrlRegister.registerCreate);

router.route('/registerhash')
.post(ctrlRegister.registerCreateHash);


module.exports = router;
