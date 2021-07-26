const express = require('express');

const User = require('./users-model');

const router = express.Router();

router.get('/', async (req, res) => {
  res.json(await User.getAllUsers())
})

// router.post('/', async (req, res) => {
//   res.status(201).json(await insertUser(req.body))
// })

module.exports = router;
