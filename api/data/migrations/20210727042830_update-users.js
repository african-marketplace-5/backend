
exports.up = function(knex) {
  return knex.schema
    .alterTable('users', tbl => {
      tbl.integer('location_id')
        .unsigned()
        .references('location_id')
        .inTable('locations')
        .onDelete('RESTRICT')
        .alter
    })
};

exports.down = function(knex) {
  return knex.schema
    .alterTable('users', tbl => {
      tbl.dropColumn('location_id')
    })
};
