/* To run the post tests successfully, the relavent routes in routes/quotesRoutes.js must be un-commented */

const db = require('../database/dbConfig');
const model = require('../helpers/quotesHelpers');

const request = require('supertest');
const server = require('../server');

beforeAll(async () => {
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

  describe('getDailyQuote()', () => {
    it('Should get quote labelled as January 1st', async () => {
      const quote = await model.getDailyQuote(1);

      expect(quote.quote).toBe('This is a test quote');
      expect(quote.author).toBe('Ruairidh Flint');
      expect(quote.dayOfYear).toBe(1);
    });
  });

  describe('editQuote()', () => {
    it('Should edit quote to change Date to 1st Feb', async () => {
      await model.editQuote(1, {
        quote: 'This is a test quote',
        author: 'Ruairidh Flint',
        dayOfYear: 32,
      });

      const quote = await model.getDailyQuote(32);

      expect(quote.quote).toBe('This is a test quote');
      expect(quote.author).toBe('Ruairidh Flint');
      expect(quote.dayOfYear).toBe(32);
    });
  });
});

/* Tests required ...
3.) Edit quote
4.) Check quote has been edited
5.) Retrieve a quote on a specific day
*/
