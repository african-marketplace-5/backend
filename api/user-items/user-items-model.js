const db = require('../data/db-config');

const getByUserId = async user_id => {
  const filtered = db('user_items as ui')
  .select('ui.user_item_id', 'ui.user_item_description', 'ui.user_item_price', 'i.item_name')
  .join('items as i', 'ui.item_id', 'i.item_id')
  .where('user_id', user_id)
  .orderBy('i.item_name');
  return filtered;
}

const add = async user_item => {
  const [newItem] = await db('user_items').insert(user_item, ['user_item_id', 'user_item_description', 'user_item_price']);
  return newItem;
}

const update = async user_item => {
  const updatedItem = await db('user_items').update(user_item);
  return updatedItem;
}

module.exports = {
  getByUserId,
  add,
  update
}