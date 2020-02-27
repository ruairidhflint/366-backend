const express = require('express');
const helpers = require('../helpers/quotesHelpers');

const Router = express.Router();

Router.get('/', async (req, res) => {
  try {
    const quotes = await helpers.getAllQuotes();
    if (quotes) {
      res.status(200).json(quotes);
    }
  } catch {
    res.status(404).json({ message: 'No quotes to display' });
  }
});

Router.get('/:date', async (req, res) => {
  const { date } = req.params;
  try {
    const quote = await helpers.getDailyQuote(date);
    if (quote) {
      res.status(200).json(quote);
    } else {
      res.status(404).json({ message: 'No quote to display' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

Router.post('/', async (req, res) => {
  try {
    const newQuote = await helpers.addQuote(req.body);
    if (newQuote) {
      res.status(200).json({ message: 'Success', newQuote });
    } else {
      res
        .status(400)
        .json({ message: 'Something went wrong! Please try again' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = Router;;
