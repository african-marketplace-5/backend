const express = require('express');

const Item = require('./items-model');

const router = express.Router();

router.get('/', async (req, res) => {
  res.json(await Item.getAllItems())
})

module.exports = router;
