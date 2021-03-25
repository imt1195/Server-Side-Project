const knexfile = require('./knexfile')

//install pg promise
const pg = require('pg-promise')()

//user?
const db = pg({
  "host": "localhost",
  "port": 5432,
  "database": "bookLibrary",
  "user": "postgresql"
})

//CRUD 


module.exports = db;