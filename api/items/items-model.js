const db = require('../data/db-config');

const getAllItems = () => { 
  return db('items as i')
    .select('i.item_id', 'i.item_name', 'c.category')
    .join('food_categories as c', 'i.category_id', 'c.category_id'); 
}

const add = async item => {
  const [newItem] = await db('items').insert(item, ['item_id', 'item_name', 'category_id'])
  return newItem;
}

const getByCategoryId = async category_id => {
  const items = await db('items as i')
    .select('i.item_id', 'i.item_name', 'c.category')
    .join('food_categories as c', 'i.category_id', 'c.category_id')
    .where('i.category_id', category_id);
  return items;
}

module.exports = {
  getAllItems,
  add,
  getByCategoryId
}