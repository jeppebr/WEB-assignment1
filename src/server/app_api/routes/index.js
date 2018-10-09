const express = require('express');
const router = express.Router();
const ctrlLocations= require('../controllers/locations');
const ctrlSchedules= require('../controllers/schedulesController');
const ctrlMain= require('../controllers/mainControllers');

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

module.exports = router;
