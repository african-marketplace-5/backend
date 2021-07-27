const bcrypt = require('bcryptjs');

const hash = bcrypt.hashSync('password', 8);

exports.seed = function(knex) {
  return knex('users').insert([
    { username: 'kaz', password: hash, location_id: 4 },
    { username: 'adam', password: hash, location_id: 3 },
    { username: 'emmanuel', password: hash, location_id: 4 },
    { username: 'jordan', password: hash },
    { username: 'romy', password: hash },
    { username: 'garrett', password: hash },
  ]);
};
