const db = require('../data/db-config');

function getAllFoodCategories() { return db('food_categories') }

module.exports = {
  getAllFoodCategories
}