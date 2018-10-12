const express = require('express');
const router = express.Router();
const ctrlSchedules= require('../controllers/schedulesController');
const ctrlExercises= require('../controllers/exercisesController');
const ctrlExerciseLogs= require('../controllers/exerciseLogsController');
const ctrlLogin= require('../controllers/loginController');
const ctrlRegister = require('../controllers/registerController');
const ctrlLogout = require('../controllers/logoutController');

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

//exercise logs
router.route("/users/:userId/exerciseLogs")
    .post(ctrlExerciseLogs.postExerciseLog)

//Authentication
router.route('/login')
    .post(ctrlLogin.loginCreate);

router.route('/login/:username')
    .get(ctrlLogin.loginGetUser);

router.route('/register')
    .post(ctrlRegister.registerCreate);

router.route('/logout')
    .post(ctrlLogout.logoutCreate);

module.exports = router;
