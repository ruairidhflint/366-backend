/* To run the post tests successfully, the relavent routes in routes/quotesRoutes.js must be un-commented */

const db = require('../database/dbConfig');
const model = require('../helpers/quotesHelpers');

const request = require('supertest');
const server = require('../server');

beforeEach(async () => {
  await db('quotes').truncate();
});

describe('quotes model', () => {
  describe('addQuote()', () => {
    it('Should add new quote to January 1st', async () => {
      await model.addQuote({
        quote: 'This is a test quote',
        author: 'Ruairidh Flint',
        dayOfYear: 1,
      });

      const quotes = await db('quotes');

      expect(quotes).toHaveLength(1);
    });
  });
});
