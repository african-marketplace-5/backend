const express = require('express');

const { restricted } = require('../auth/auth-middleware');
const User = require('./users-model');

const router = express.Router();

router.get('/', restricted, async (req, res) => {
  res.json(await User.getAllUsers())
})

module.exports = router;
