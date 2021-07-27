const express = require('express');

const { restricted } = require('../auth/auth-middleware');
const Item = require('./items-model');

const router = express.Router();

router.get('/', /*restricted,*/ async (req, res) => {
  res.json(await Item.getAllItems())
})

router.post('/', /*restricted,*/ async (req, res) => {
  Item.add(req.body)
    .then(newItem => {
      res.status(201).json(newItem);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    })
})

router.get('/:category_id', /*restricted,*/ (req, res) => {
  const { category_id } = req.params;

  Item.getByCategoryId(category_id)
    .then(items => {
      res.status(200).json(items);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    })
})

module.exports = router;
