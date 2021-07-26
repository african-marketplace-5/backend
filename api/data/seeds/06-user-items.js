
exports.seed = function(knex) {
  return knex('user_items').insert([
    {user_item_description: 'Eggs. They come out of chickens and other birds', user_item_price: 4.00, user_id: 1, item_id: 1, location_id: 4},
    {user_item_description: "God's gift to mankind", user_item_price: 12.00, user_id: 1, item_id: 4, location_id: 4},
    {user_item_price: 3.50, user_id: 1, item_id: 5, location_id: 4},
    {user_item_price: 2.00, user_id: 1, item_id: 11, location_id: 4},
    {user_item_price: 1.00, user_id: 1, item_id: 15, location_id: 4},
    {user_item_price: 3.00, user_id: 1, item_id: 19, location_id: 4},
    {user_item_description: 'Not Hulled', user_item_price: 3.00, user_id: 1, item_id: 24, location_id: 4},
    {user_item_price: 1.00, user_id: 1, item_id: 28, location_id: 4},
    {user_item_price: 3.50, user_id: 2, item_id: 1, location_id: 3},
    {user_item_price: 4.00, user_id: 2, item_id: 1, location_id: 3},
    {user_item_description: 'Cheapest eggs around!', user_item_price: 3.75, user_id: 3, item_id: 1, location_id: 4},
  ]);
};
