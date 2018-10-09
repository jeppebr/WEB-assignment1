const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const login = require('../controllers/login');
const register = require('../controllers/register');
const mainController = require('../controllers/mainControllers');

router
.route('/')
.get(mainController.index)

// locations
router
.route('/locations')
.get(ctrlLocations.locationsCreate)
//.get(ctrlLocations.locationsListByDistance)
//.post(ctrlLocations.locationsCreate);

router
.route('/login')
.post(login.loginCreate)

router
.route('/register')
.post(register.registerCreate)

/* router
.route('/locations/:locationid')

.get(ctrlLocations.locationsReadOne)
.put(ctrlLocations.locationsUpdateOne)
.delete(ctrlLocations.locationsDeleteOne); */

module.exports = router;
