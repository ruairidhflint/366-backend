require('dotenv').config();
const server = require('./server.js');

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});