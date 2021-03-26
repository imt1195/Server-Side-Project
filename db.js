const knexfile = require('./knexfile')

const pg = require('pg-promise')();

//user?
const db = pg({
  "host": "localhost",
  "port": 5432,
  "database": "bookLibrary",
  "user": "jaylenebautista"
})

module.exports = db;
