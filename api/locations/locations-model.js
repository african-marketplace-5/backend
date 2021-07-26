const db = require('../data/db-config');

function getAllLocations() { return db('locations') }

module.exports = {
  getAllLocations
}