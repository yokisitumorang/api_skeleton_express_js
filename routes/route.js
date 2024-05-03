// Import the necessary modules
const express = require('express');  // Express.js for routing
const router = express.Router();  // Create a new router
const userController = require('../services/user_controller/user');  // Import the user controller
const db = require('../config/database/db');  // Import the database connection

// Define a route handler for GET requests to '/route1'
router.get('/route1', (req, res) => {
    userController.function1()
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

router.get('/route2', (req, res) => {
    userController.function2()
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

router.get('/route3', (req, res) => {
    userController.function3()
    .then(result => res.send(result))
    .catch(err => res.send(err));
});


// Export the router so it can be used in other parts of the application
module.exports = router;