const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3000;
//import db 
const db = require("./db");
const dbClass = require("./library")

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

//set up HTTP methods, endpointURL and relevant functions
app.get('/books', db.getBooks) //get all books
app.get('/books/:id', db.getBookById) //get book by id
app.post('/books', db.createBook) //add book 
app.put('/books/:id', db.updateBook) //update a book was it read?
app.delete('/books/:id', db.deleteBook) //delete a book

app.get('/library/:id', dbClass.getLibraryCatalog) //get the list of books at each library
app.get('/library/:id', dbClass.getLibraries) //get a list of all the libraries

app.listen(PORT, () => {
    console.log(`listenining on http://localhost:${PORT}`);
});