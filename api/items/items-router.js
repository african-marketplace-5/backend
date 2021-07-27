const express = require('express');

const { restricted } = require('../auth/auth-middleware');
const Item = require('./items-model');

const router = express.Router();

router.get('/', /*restricted,*/ async (req, res) => {
  res.json(await Item.getAllItems())
})

router.post('/', /*restricted,*/ async (req, res) => {
  Item.add(req.body)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      res.status(400).json(err);
    })
})

module.exports = router;
