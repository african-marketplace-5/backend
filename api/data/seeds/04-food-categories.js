
exports.seed = function(knex) {
  return knex('food_categories').insert([
    { category: 'Animal Products' },
    { category: 'Beans' },
    { category: 'Cereals (Maize)' },
    { category: 'Cereals (Rice)' },
    { category: 'Cereals (Other)' },
    { category: 'Fruits' },
    { category: 'Roots & Tubers' },
    { category: 'Seeds & Nuts' },
    { category: 'Vegetables' },
    { category: 'Other' },
  ]);
};
