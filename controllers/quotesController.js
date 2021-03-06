const helpers = require('../helpers/quotesHelpers');

async function getAllQuotes(req, res) {
  try {
    const quotes = await helpers.getAllQuotes();
    if (quotes) {
      res.status(200).json({ length: quotes.length, quotes });
    } else {
      res.status(404).json({ message: 'No quotes to display' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function getQuoteByDate(req, res) {
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
}

async function postNewQuote(req, res) {
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
}

async function editQuote(req, res) {
  const { id } = req.params;
  const update = {
    quote: req.body.quote,
    author: req.body.author,
  };
  try {
    const editedQupte = await helpers.editQuote(id, update);
    if (editedQupte) {
      res.status(200).json({ message: 'Success', editedQupte });
    } else {
      res
        .status(400)
        .json({ message: 'Something went wrong! Please try again' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllQuotes,
  postNewQuote,
  getQuoteByDate,
  editQuote
};
