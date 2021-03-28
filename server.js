const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3000;
//import db 
const db = require("./db");
const Books = require('./books')
const Libraries = require('./library')

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

// add book
app.post('/books', async (req,res) => {
  const {title, author, year_published, genre, pages, status, library_id} = req.body;
  try{
    await Books.createBook({title, author, year_published, genre, pages, status, library_id});
    res.status(201).send({
      message: `Your book with the title ${title} has been created successfully `,
    })
  }catch(error){
    console.log(error);
    res.status(500).json(error)
  }
});

 //update a book 
 app.patch('/books/:id', async (req,res) =>{
  const id = parseInt(req.params.id);
  const newStatus = req.body.status;

  try{
    const bookToUpdate = await Books.updateBook(id, newStatus)
    res.status(200).json({
      message: "successfully updated",
    })
  }catch(error){
    console.log(error);
    res.status(500).json(error)
  }
})

//delete a book
app.delete('/books/:id', async(req,res)=>{
  const id = parseInt(req.params.id);
  try {
    await Books.deleteBook(id);
    res.status(200).json({
      message: "successfully deleted book",
    })
  } catch(error){
    return res.status(500).json(error)
  }
})

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
