'use strict';
const db = require('./_db');
module.exports = db;

const User = require('./models/user');
const Rank = require('./models/rank');
const Scene = require('./models/scene');

Rank.belongsTo(User);
Rank.belongsTo(Scene);
