const bcrypt = require('bcryptjs');

const hash = bcrypt.hashSync('password', 8);

exports.seed = function(knex) {
  return knex('users').insert([
    { username: 'kaz', password: hash },
    { username: 'adam', password: hash },
    { username: 'emmanuel', password: hash },
    { username: 'jordan', password: hash },
    { username: 'romy', password: hash },
    { username: 'garrett', password: hash },
  ]);
};
