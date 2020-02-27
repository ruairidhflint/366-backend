const db = require('../database/dbConfig');

function getAllQuotes() {
  return db('quotes');
}

function getDailyQuote(date) {
  return db('quotes')
    .where({ dayOfYear: date })
    .first();
}

function addQuote(quote) {
  return db('quotes').insert(quote, 'id');
}

module.exports = {
    getAllQuotes,
    getDailyQuote,
    addQuote
}
