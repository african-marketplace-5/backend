const express = require('express');

const Location = require('./locations-model');

const router = express.Router();

router.get('/', async (req, res) => {
  res.json(await Location.getAllLocations())
})

module.exports = router;
