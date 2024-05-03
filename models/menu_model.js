// menu_model.js

const { Sequelize } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const {connection,sequelize} = require('../config/database/db');

class Menu extends Model {}

Menu.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  menu_code: DataTypes.STRING,
  menu_name: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, { sequelize, modelName: 'm_menu',freezeTableName: true  });

module.exports = Menu;