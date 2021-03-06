const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const AuthRouter = require('./auth/auth-router');
const UsersRouter = require('./users/users-router');
const ItemsRouter = require('./items/items-router');
const LocationsRouter = require('./locations/locations-router');
const FoodCategoriesRouter = require('./food-categories/food-categories-router');
const UserItemsRouter = require('./user-items/user-items-router');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', AuthRouter);
server.use('/api/users', UsersRouter);
server.use('/api/items', ItemsRouter);
server.use('/api/locations', LocationsRouter);
server.use('/api/food_categories', FoodCategoriesRouter);
server.use('/api/user_items', UserItemsRouter);

server.use('*', (_, res) => {
  res.send("<h1>Welcome to the African Marketplace API</h1>")
})

module.exports = server
