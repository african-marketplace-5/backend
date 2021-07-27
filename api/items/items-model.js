const db = require('../data/db-config');

function getAllItems() { return db('items') }

const add = async item => {
  const [newItem] = db('items').insert(item, ['item_id', 'item_name', 'category_id'])
  return newItem
}

const getByCategoryId = async category_id => {
  const items = await db('items').where('category_id', category_id);
  return items;
}

module.exports = {
  getAllItems,
  add,
  getByCategoryId
}