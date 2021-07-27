const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { checkUsernameExists } = require('./auth-middleware');
const User = require('../users/users-model');
const { JWT_SECRET } = require('../secrets');

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

router.post('/login', checkUsernameExists, async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findByUsername(username);

  if (user && bcrypt.compareSync(password, user.password)){
    const token = tokenBuilder(user);
    req.headers.authorization = token;
    res.status(200).json({
      message: `Welcome ${username}`,
      user_id: user.user_id,
      location_id: user.location_id,
      token
    })
  } else {
    res.status(400).json({ message: 'invalid password' });
  }
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