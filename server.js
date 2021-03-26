const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3000;
//import db 
// const db = require("./db");
const Books = require('./books')

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})) 

//set up HTTP methods, endpointURL and relevant functions
//get all books 
app.get('/books', async (req,res) => {
  const books = await Books.getBooks();
  return res.send(books)
}); 

//get book by id
app.get('/books/:id', async (req,res) => {
  const id = parseInt(req.params.id);
  const bookId = await Books.getBookById(id);  
  return res.send(bookId);
}); 

//delete a book
app.delete('/books/delete/:id', async (req,res) => {
  const id = parseInt(req.params.id);
  try {
    await Books.deleteBook(id);
    res.status(200).json({
      message: "sucessfully deleted book",
    })
  } catch (err){
    return res.status(404).send(err);
  }
}); 

//add book
// app.post('/books', (req,res) => {
//   const id = parseInt(req.params.id);
//   Books.createBook({
//     id: 4,
//     title: 'The Fifth Season',  
//     Author: 'N. K. Jemisin', 
//     YearPublished: 2015, 
//     Genre: 'science fantasy', 
//     Pages: 449})
// });

// app.put('/books/:id', (req,res) => {Books.updateBook()}); //update a book was it read?


// app.get('/library/:id', dbClass.getLibraryCatalog) //get the list of books at each library
// app.get('/library/:id', dbClass.getLibraries) //get a list of all the libraries

app.listen(PORT, () => {
    console.log(`listenining on http://localhost:${PORT}`);
}); 