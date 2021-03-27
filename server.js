const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3000;
//import db 
// const db = require("./db");
const Books = require('./books')
const Libraries = require('./books')

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

//find available libraries
app.get('/libraries', async(req,res) => {
  const libraries = await Libraries.getLibraries()
  return res.send(libraries)
})

//find the available books at each library, using the library id
app.get('/librarybooks/:id', async(req,res) => {
  const id = parseInt(req.params.id);
  const bookList = await Libraries.getLibraryCatalog(id);
  console.log(bookList)
  return res.send(bookList)
})

app.listen(PORT, () => {
    console.log(`listenining on http://localhost:${PORT}`);
}); 
