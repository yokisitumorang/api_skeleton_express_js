const express = require('express');  // Express.js for routing
const router = express.Router();  // Create a new router
const db = require('../../config/database/db'); 
const Menu = require('../../models/menu_model');

function function1() {

    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM m_menu', (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function function2(){
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM m_menu', (err, results) => {
        if (err) {
          console.error('Error executing query: ', err);
          return;
        }
        resolve(results);
      });
    });

}

// using model like eloquent
function function3(){
    return new Promise((resolve, reject) => {
        Menu.findAll().then(results => resolve(results));
    });
}

module.exports = {
    function1,
    function2,
    function3
};


