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
  db.query('SELECT * FROM books ORDER BY id ASC', (error,results) => {
    if(error){
      throw error
    }
    res.status(200).json(results.row)
  })
}

//get book by id 
const getBookById = (req,res) => {
  const id = parseInt(req.params.id)

  db.query('SELECT * FROM books WHERE id=$1', (error,results) => {
    if(error){
      throw error
    }
    res.status(200).json(results.row)
  })
}

//create/add a new book
const createBook = (req,res) => {
  //name of book/title
  const { title } = req.body

  db.query('INSERT INTO books (title) VALUES ($1)', [title], (error, results) => {
    if(error){
      throw error
    }
    res.status(201).send(`Book was added with ID: ${results.insertId}`)
  })
}

//update book data
const updateBook = (req,res) => {
  const id = parseInt(req.params.id)
  const { title } = req.body
  db.query('UPDATE book SET title =$1 WHERE id=$2',[title], (error,results) => {
    if(error){
      throw error
    }
    res.status(200).send(`book modified with ID: ${id}`)
  })
}

//delete a book
const deleteBook = (req,res) => {
  const id = parseInt(req.params.id)
  db.query('DELETE FROM book WHERE id=$1', [id], (error, results) => {
    if(error){
      throw error
    }
    res.status(200).send(`book deleted with ID: ${id}`)
  })
}

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
}