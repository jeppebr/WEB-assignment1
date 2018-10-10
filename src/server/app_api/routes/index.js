const express = require('express');
const router = express.Router();
const ctrlLocations= require('../controllers/locations');
const ctrlSchedules= require('../controllers/schedulesController');
const ctrlExercises= require('../controllers/exercisesController');
const ctrlLogin= require('../controllers/login');

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
    .get(ctrlExercises.getExercises)
    .post(ctrlExercises.postExercise)
router.route("/schedules/:scheduleId/exercises/:exerciseId")
    .delete(ctrlExercises.deleteExercise);

router.route('/login')
    .post(ctrlLogin.loginCreate);

module.exports = router;
