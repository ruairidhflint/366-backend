const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const quotesRoute = require('./routes/quotesRoute');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/quotes', quotesRoute)

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Working', database: process.env.DB_ENV });
});



module.exports = server;
