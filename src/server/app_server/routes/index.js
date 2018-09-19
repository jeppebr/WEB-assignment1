var express = require('express');
var router = express.Router();
const mainControllers = require('../controllers/mainControllers');
const schedulesController = require('../controllers/schedulesController');

router.get('/', mainControllers.index);
// Create
router.post('/postScheduleItem', schedulesController.postScheduleItem);
router.post('/postSchedule', schedulesController.postSchedule);
// Deletes
router.post('/deleteSchedule', schedulesController.deleteSchedule);
router.post('/deleteScheduleExercise', schedulesController.deleteScheduleExercise);

module.exports = router;
