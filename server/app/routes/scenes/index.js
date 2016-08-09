'use strict';
const router = require('express').Router();
const db = require('../../../db');
const Scene = db.model('scene');
const Rank = db.model('rank');
module.exports = router;

router.get('/', function (req, res, next) {
  Scene.findAll({})
  .then(scenes => res.send(scenes))
  .catch(next);
});

