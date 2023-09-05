//requiring express and port
const express = require('express');
const router = express();

//importing home controller
const homeController = require('../controllers/home_controller');

//router for getting req of home
router.get('/', homeController.home);

//requiring products route
router.use('/products', require('./products'));

//exporting router
module.exports = router;