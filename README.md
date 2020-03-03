# 366 Quotes - Backend

366 quotes is a simple vanilla Javascript project using minimal, well, everything. It displays a new quote each day and little else more. 

It is deployed at [https://366-quotes.netlify.com/](https://366-quotes.netlify.com/)

and the corresponding repository is at [https://github.com/ruairidhflint/366](https://github.com/ruairidhflint/366)

## Installation

To run this project you'll need to clone the repository and run `npm install`.
Once you have installed, you'll need to run `npx knex migrate:latest` to migrate the tables to the database locally.
To post to your local database, you will need to uncomment the relevant endpoints in the routes/quotesRoute.js file and use Postman/Curl to supply data.
The post request requires the following schema:

```json
{
  "quote": "Your new quote here",
  "author": "Quotee's name here",
  "dayOfYear": 123
}
```

The last field indicates the number of the day the date falls at. Eg. January 1st would be 1, December 31st would be 365 or 366 depending on the leap year.

## Usage

Once you have everything up and running, you can use the `GET` endpoint to retrieve the relevant days quotes by appending the localhost address or deployed API with `quotes/:dayOfYear`. 
There are several other endpoints available to use, such as `GET` all quotes and `PUT` to edit exisiting quotes but those are disabled by default and for set up only.

## Technology

- NodeJs 
- Express
- Knex
- SQLite3 (testing)
- PostgreSQL (production)
- Helmet
- CORS
- Jest
- Supertest

## License

MIT

## Contact

Please feel free to get in contact via [Twitter](https://twitter.com/mrroryflint) if you have any questions, queries, suggestions.





