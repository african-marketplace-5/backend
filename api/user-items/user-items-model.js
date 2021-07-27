const db = require('../data/db-config');

const getAllUserItems = () => {
  return db('user_items');
}

const getByUserId = async user_id => {
  const filtered = db('user_items').where('user_id', user_id);
  return filtered;
}

const add = async user_item => {
  const [newItem] = await db('user_items').insert(user_item, ['user_item_id', 'user_item_description', 'user_item_price']);
  return newItem;
}

module.exports = {
  getAllUserItems,
  getByUserId,
  add
}