const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const UsersRouter = require('./users/users-router');
const ItemsRouter = require('./items/items-router');
const LocationsRouter = require('./locations/locations-router');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', UsersRouter);
server.use('/api/items', ItemsRouter);
server.use('/api/locations', LocationsRouter);

module.exports = server
