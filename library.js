//have to encapsulate in classes

//library class, I.T.
class Library{
  constructor({id, LibraryName, Location, LeadLibrarian}){
    this.id = id;
    this.LibraryName = LibraryName;
    this.Location = Location;
    this.LeadLibrarian = LeadLibrarian;
  }
//find the books at each specific Library
  static async getLibraryCatalog(req,res){
    try{
      const bookList = await db.query('select title, author, library.id, LibraryName, Location, from library inner join books on Library_Id = library.id;')
      return res.json(bookList)
    }catch(error){
      res.status(500).send(err)
    }
  }

  //list out the libraries: Names, Locations, and Lead Librarians
  static async getLibraries(req,res){
    try{
      const LibraryList = await db.query('select * from library order by id asc;')
      return res.json(LibraryList)
    }catch(error){
      res.status(500).send(err)
    }
  }

}

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
  
    db.query('INSERT INTO Books (Title, Author, YearPublished, Genre, Pages) VALUES ($1,$2,$3,$4,$5) RETURNING *', [Title, Author, YearPublished, Genre, Pages], (error, results) => {
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