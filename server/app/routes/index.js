'use strict';
const router = require('express').Router();
module.exports = router;

router.use('/scenes', require('./scenes'));
router.use('/users', require('./users'));
router.use('/ranks', require('./ranks'))

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});
