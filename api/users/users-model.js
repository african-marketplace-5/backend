const db = require('../data/db-config');

const getAllUsers = () => { return db('users') };

const insertUser = async user => {
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username']);
  return newUserObject;
}

module.exports = {
  getAllUsers,
  insertUser
}