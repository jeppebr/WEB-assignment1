const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlSchedules = require('../controllers/schedulesController');
const ctrlMain = require('../controllers/mainControllers');
const ctrlLogin = require('../controllers/login');
const ctrlRegister = require('../controllers/register');

// locations
router
.route('/locations')
.get(ctrlLocations.locationsCreate);

 //schedules
router.route("/schedules")
.get(ctrlMain.index)
.post(ctrlSchedules.postSchedule)
.delete(ctrlSchedules.deleteSchedule)
.put(ctrlSchedules.postScheduleItem);

router.route("/schedulesexercise")
.delete(ctrlSchedules.deleteScheduleExercise);

router.route('/login')
.post(ctrlLogin.loginCreate);

router.route('/register')
.post(ctrlRegister.registerCreate);

module.exports = router;
