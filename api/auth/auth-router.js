const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../users/users-model');
const JWT_SECRET = require('../secrets');

const router = express.Router();

router.post('/register', (req, res) => {
  const { username, password, location_id } = req.body;
  const hash = bcrypt.hashSync(password, 8);

  User.insertUser({ username: username.trim(), password: hash, location_id })
    .then(newUser => {
      res.status(201).json(newUser)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

const tokenBuilder = user => {
  const payload = {
    subject: user.user_id,
    username: user.username
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = router;