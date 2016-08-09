'use strict';
const router = require('express').Router();
const db = require('../../../db');
const Rank = db.model('rank');
const User = db.model('user');
const Scene = db.model('scene');
const jStat = require('jStat').jStat;
module.exports = router;

router.get('/', function (req, res, next) {
  Rank.findAll()
  .then(ranks => res.send(ranks))
  .catch(next);
});

router.get('/profile', function (req, res, next) {
  Rank.findAll({
    where: {
      userId: req.user.id
    },
    include: [
      {model: Scene}
    ]
  })
  .then(function (ranks) {
    let data = {
      location: {arr: [], mean: null, stdev: null},
      extroversion: {arr: [], mean: null, stdev: null},
      extravagance: {arr: [], mean: null, stdev: null},
      family: {arr: [], mean: null, stdev: null},
      partnership: {arr: [], mean: null, stdev: null},
    };
    ranks.forEach(function (rank) {
      if (rank.scene.scale === 'low'){
        data[rank.scene.dimension].arr.push(-rank.value);
      } else {
        data[rank.scene.dimension].arr.push(rank.value);
      }
    });
    let dimensions = Object.keys(data);
    dimensions.forEach(function (dimension) {
      data[dimension].mean = jStat.mean(data[dimension].arr);
      data[dimension].stdev = jStat.stdev(data[dimension].arr);
    })
    res.send(data);
  })
  .catch(next);
})

router.post('/', function (req, res, next) {
  Rank.findOrCreate({
    where: {
      userId: req.user.id,
      sceneId: req.body.sceneId,
    }
  })
  .spread(function (rank) {
    rank.value = Number(req.body.value);
    return rank.save();
  })
  .then(function (updatedRank) {
    res.send(updatedRank);
  })
  .catch(next);

})
