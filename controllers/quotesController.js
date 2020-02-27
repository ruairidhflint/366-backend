const helpers = require('../helpers/quotesHelpers');

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

module.exports = {
    postNewQuote,
    getQuoteByDate
}
