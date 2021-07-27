const db = require('../data/db-config');

const getAllUsers = () => { return db('users') };

const insertUser = async user => {
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password', 'location_id']);
  return newUserObject;
}

const findByUsername = async username => {
  const user = await db('users').where('username', username).first();
  return user
}

module.exports = {
  getAllUsers,
  insertUser,
  findByUsername
}