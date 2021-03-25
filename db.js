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
//Get all books
const getBooks = (req,res) => {
  db.query('SELECT * FROM Books ORDER BY id ASC', (error,results) => {
    if(error){
      throw error
    }
    res.status(200).json(results.row)
  })
}

//get book by id 
const getBookById = (req,res) => {
  const id = parseInt(req.params.id)

  db.query('SELECT * FROM Books WHERE id=$1', (error,results) => {
    if(error){
      throw error
    }
    res.status(200).json(results.row)
  })
}

//create/add a new book
const createBook = (req,res) => {
  //name of book/title
  const { Title, Author, YearPublished, Genre, Pages } = req.body

  db.query('INSERT INTO Books (Title) VALUES ($1)', [Title, Author, YearPublished, Genre, Pages], (error, results) => {
    if(error){
      throw error
    }
    res.status(201).send(`Book was added with ID: ${results.insertId}`)
  })
}

//update book data
const updateBook = (req,res) => {
  const id = parseInt(req.params.id)
  const { Title, Author, YearPublished, Genre, Pages } = req.body
  db.query('UPDATE Book SET Title =$1 WHERE id=$2',[Title, Author, YearPublished, Genre, Pages], (error,results) => {
    if(error){
      throw error
    }
    res.status(200).send(`Book modified with ID: ${id}`)
  })
}

//delete a book
const deleteBook = (req,res) => {
  const id = parseInt(req.params.id)
  db.query('DELETE FROM Book WHERE id=$1', [id], (error, results) => {
    if(error){
      throw error
    }
    res.status(200).send(`Book deleted with ID: ${id}`)
  })
}

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
}