'use strict';
const Sequelize = require('sequelize');
const db = require('../_db');

module.exports = db.define('rank', {
  value: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
      min: -2,
      max: 2
    }
  }
});
