// Import the necessary modules
const express = require('express');  // Express.js for routing
const router = express.Router();  // Create a new router
const userController = require('../services/user_controller/user');  // Import the user controller

// Define a route handler for GET requests to '/route1'
router.get('/get_all_user', (req, res) => {
    userController.getAllUsers()
    .then(users => res.send(users))
    .catch(err => res.send(err));
    // Attempt to execute a SQL query
   
});

// Export the router so it can be used in other parts of the application
module.exports = router;