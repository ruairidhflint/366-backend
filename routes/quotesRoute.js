const express = require('express');
const controller = require('../controllers/quotesController');

const Router = express.Router();

Router.get('/:date', controller.getQuoteByDate);

Router.post('/', controller.postNewQuote);

module.exports = Router;;
