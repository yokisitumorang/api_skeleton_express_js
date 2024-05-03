const express = require('express');  // Express.js for routing
const router = express.Router();  // Create a new router
const {connection,sequelize} = require('../../config/database/db'); 
const Menu = require('../../models/menu_model');
const { check, validationResult } = require('express-validator');

function function1() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM m_menu', (err, results) => {
        if (err) {
          console.error('Error executing query: ', err);
          return;
        }
        resolve(results);
      });
    });
}

function function2(){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM m_menu', (err, results) => {
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

function storeData(data){
  
    // first method
    return new Promise((resolve, reject) => {
        Menu.create(
            {
                menu_code: data.menu_code,
                menu_name: data.menu_name,
              },
              { fields: ['menu_code','menu_name'] }
        )
            .then(result => resolve(result))
            .catch(err => reject(err));
    });

    // second method
    return new Promise((resolve, reject) => {
        Menu.create(data)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });

}



module.exports = {
    function1,
    function2,
    function3,
    storeData
    
};


