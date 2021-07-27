const db = require('../data/db-config');

function getAllItems() { return db('items') }

const add = async item => {
  const [newItem] = db('items').insert(item, ['item_id', 'item_name', 'category_id'])
  return newItem
}

module.exports = {
  getAllItems,
  add
}