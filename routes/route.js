// Import the necessary modules
const express = require('express');  // Express.js for routing
const app = express();

const router = express.Router();  // Create a new router
const menuController = require('../services/user_controller/menu');  // Import the user controller
const db = require('../config/database/db');  // Import the database connection
const { check, validationResult } = require('express-validator');
const Menu = require('../models/menu_model');


// Define a route handler for GET requests to '/route1'
// router.get('/route1', (req, res) => {
//     menuController.function1()
//     .then(result => res.send(result))
//     .catch(err => res.send(err));
// });


router.get('/route1', (req, res) => {
    menuController.function1()
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

router.get('/route2', (req, res) => {
    menuController.function2()
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

router.get('/route3', (req, res) => {
    menuController.function3()
    .then(result => res.send(result))
    .catch(err => res.send(err));
});


router.post('/store1', [
    check('menu_code').custom(value => {
        return Menu.findOne({ where: { menu_code: value } }).then(menu => {
          if (menu) {
            return Promise.reject('Menu code already in use');
          }
        });
      }),
    check('menu_code').isLength({ min: 3 }).withMessage('Menu code is required'),
    check('menu_name').isLength({ min: 3 }).withMessage('Menu name is required')
  ], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = req.body;
    menuController.storeData(req.body)
        .then(result => res.send(result))
        .catch(err => res.send(err));
});


// Export the router so it can be used in other parts of the application
module.exports = router;