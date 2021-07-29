const express = require('express');

const { restricted } = require('../auth/auth-middleware');
const UserItem = require('./user-items-model');

const router = express.Router();

router.get('/filter/:user_id', restricted, (req, res) => {
  const { user_id } = req.params;
  UserItem.getByUserId(user_id)
    .then(userItems => {
      res.status(200).json(userItems);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    })
})

router.post('/', restricted, (req, res) => {
  const { user_item_description, user_item_price, item_id, user_id } = req.body;

  UserItem.add({ user_item_price, user_id, user_item_description, item_id })
    .then(newUserItem => {
      res.status(201).json(newUserItem);
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

router.put('/:user_item_id', restricted, (req, res) => {
  const { user_item_id } = req.params;
  const { user_item_description, user_item_price } = req.body;

  UserItem.update(user_item_id, { user_item_price, user_item_description })
    .then(updatedUserItem => {
      res.status(200).json(updatedUserItem);
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

router.delete('/:user_item_id', restricted, (req, res) => {
  const { user_item_id } = req.params;

  UserItem.remove(user_item_id)
    .then(removedItem => {
      res.status(200).json(removedItem);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    })
})

module.exports = router;