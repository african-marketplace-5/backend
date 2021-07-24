
exports.up = function(knex) {
  return knex.schema
    .createTable('locations', tbl => {
      tbl.increments('location_id')
      tbl.string('location_name').unique().notNullable()
      tbl.string('location_abr').unique().notNullable()
    })
    .createTable('food_categories', tbl => {
      tbl.increments('category_id')
      tbl.string('category').unique().notNullable()
    })
    .createTable('items', tbl => {
      tbl.increments('item_id')
      tbl.string('item_name').unique().notNullable()
      tbl.integer('category_id')
        .unsigned()
        .notNullable()
        .references('category_id')
        .inTable('food_categories')
        .onDelete('RESTRICT')
    })
    .createTable('user_items', tbl => {
      tbl.increments('user_item_id')
      tbl.text('user_item_description')
      tbl.float('user_item_price', 2, 2).notNullable()
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete('RESTRICT')
      tbl.integer('item_id')
        .unsigned()
        .notNullable()
        .references('item_id')
        .inTable('items')
        .onDelete('RESTRICT')
      tbl.integer('location_id')
        .unsigned()
        .notNullable()
        .references('location_id')
        .inTable('locations')
        .onDelete('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user_items')
    .dropTableIfExists('items')
    .dropTableIfExists('food_categories')
    .dropTableIfExists('locations')
};
