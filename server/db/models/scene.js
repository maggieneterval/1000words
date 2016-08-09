'use strict';
const Sequelize = require('sequelize');
const db = require('../_db');

module.exports = db.define('scene', {
  photoUrl: {
    type: Sequelize.TEXT
  },
  dimension: {
    type: Sequelize.ENUM('location', 'extroversion', 'extravagance', 'family', 'partnership')
  },
  scale: {
    type: Sequelize.ENUM('low', 'high')
  }
})
