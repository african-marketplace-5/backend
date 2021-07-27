const express = require('express');

const Location = require('./locations-model');
const { restricted } = require('../auth/auth-middleware');

const router = express.Router();

router.get('/', /*restricted,*/ async (req, res) => {
  res.json(await Location.getAllLocations())
})

module.exports = router;
