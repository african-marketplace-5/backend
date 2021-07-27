const express = require('express');

const FoodCategory = require('./food-categories-model');
const { restricted } = require('../auth/auth-middleware');

const router = express.Router();

router.get('/', /*restricted,*/ async (req, res) => {
  res.json(await FoodCategory.getAllFoodCategories())
})

module.exports = router;
