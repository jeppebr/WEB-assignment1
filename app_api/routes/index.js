const express = require('express');
const router = express.Router();
const ctrlLocations= require('../controllers/locations');

// locations
router
.route('/locations') 

.get(ctrlLocations.locationsCreate) 
//.get(ctrlLocations.locationsListByDistance) 
//.post(ctrlLocations.locationsCreate); 

/* router 
.route('/locations/:locationid') 

.get(ctrlLocations.locationsReadOne) 
.put(ctrlLocations.locationsUpdateOne) 
.delete(ctrlLocations.locationsDeleteOne); */

module.exports = router;
