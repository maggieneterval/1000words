'use strict';
const router = require('express').Router();
const db = require('../../../db');
const User = db.model('user');
const Rank = db.model('rank');
const Scene = db.model('scene');
const jStat = require('jStat').jStat;
module.exports = router;

router.get('/', function (req, res, next) {
  User.findAll()
  .then(users => res.send(users))
  .catch(next);
});

router.post('/', function (req, res, next) {
  User.create(req.body)
  .then(user => res.send(user))
  .catch(next);
});

router.get('/matches', function (req, res, next) {

  let sigAvgs = {};
  let arrayOfMatches = [];
  let everyUser;

  Rank.findAll({
    where: {
      userId: req.user.id
    },
    include: [{model: Scene}]
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
      if (Math.abs(data[dimension].stdev) <= 1){
        sigAvgs[dimension] = data[dimension].mean;
      }
    })
  })
  .then(function () {

    User.findAll({
      where: {
        id: {
          $ne: req.user.id
        }
      }
    })
    .then(function (allUsers) {
      everyUser = allUsers;
      allUsers.forEach(function (user) {
        Rank.findAll({
          where: {
            userId: user.id
          },
          include: [{model: Scene}]
        })
        .then(function (ranks) {

          let matchData = {
            location: {arr: [], mean: null, stdev: null},
            extroversion: {arr: [], mean: null, stdev: null},
            extravagance: {arr: [], mean: null, stdev: null},
            family: {arr: [], mean: null, stdev: null},
            partnership: {arr: [], mean: null, stdev: null},
          };

          ranks.forEach(function (rank) {
            if (rank.scene.scale === 'low'){
              matchData[rank.scene.dimension].arr.push(-rank.value);
            } else {
              matchData[rank.scene.dimension].arr.push(rank.value);
            }
          });

          let sigDimensions = Object.keys(sigAvgs);

          sigDimensions.forEach(function (dimension) {
            matchData[dimension].mean = jStat.mean(matchData[dimension].arr);
            matchData[dimension].stdev = jStat.stdev(matchData[dimension].arr);
            if (Math.abs(matchData[dimension].stdev) <= 1 && Math.abs(matchData[dimension].mean - sigAvgs[dimension] <=1.5)){
              arrayOfMatches.push(user);
              return;
            }
          })
        })
      })
    })
    .then(function () {
      if (arrayOfMatches.length === 0){
        res.send(everyUser);
      } else {
        res.send(arrayOfMatches);
      }
    })
    .catch(next);
  })
});
