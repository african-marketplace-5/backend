const db = require('../data/db-config');

const { getAll } = require('../user-items/user-items-model');

const getAllItems = async () => { 
  const items = await db('items as i')
    .select('i.item_id', 'i.item_name', 'c.category')
    .join('food_categories as c', 'i.category_id', 'c.category_id')
  
  const userItems = await getAll();
  let adjustedItems = []

  items.forEach(item => {
    let newItem = { ...item, prices: [], sellers: 0 };
    userItems.forEach(userItem => {
      if (userItem.item_id === item.item_id){
        newItem.prices.push(userItem.user_item_price);
        newItem.sellers += 1;
      }
    })
    adjustedItems.push(newItem);    
  })

  return adjustedItems;
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