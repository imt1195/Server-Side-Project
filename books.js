//have to encapsulate in classes
const db = require('./db')

class Books {
  constructor({id, title, Author, YearPublished, Genre, Pages}){
    this.id = id
    this.title = title
    this.Author = Author
    this.YearPublished = YearPublished
    this.Genre = Genre
    this.Pages = Pages
  }
  //CRUD 
  //Get all books
  static async getBooks() {
    const books = await db.query('select * from books order by id asc;')
    return books; 
    // console.log(books)
  }
 
  //get book by id 
  static async getBookById(id) {
    const [book] = await db.query('select * from books where id = $1;', id)
    if(book){
      console.log(new this(book))
      return new this(book)
    }else{
      throw error 
    }
  } 

  //not fully working yet 

  //delete a book
  static async deleteBook(id) {
    const deleted =  await db.query('delete from books where id=$1;', [id])
    return deleted;
    // console.log(deleted)
  }

  //create/add a new book
  static async createBook() {
    const book = db.query('insert into books (title, Author, YearPublished, Genre, Pages) values ($1,$2,$3,$4,$5) returning *;')
    console.log(book)
  }

  //update book data
  static async updateBook(id) {
    const updated_book = await db.query('update books set title=$1, Author=$2, YearPublished=$3, Genre=$4, Pages=$5 where id=$6;')
    console.log(updated_book) 
  }
}

module.exports = Books;

//find the books at each specific Library
  // async getBooksAtLibraries(){
  //   const books = await db.any('select Library_Id, Book_Id FROM Library_Books JOIN LibraryName ON Library.id = Library_Id JOIN Title ON Books.id = Book_Id', (error,results)=>{
  //     if(error){
  //       throw error
  //     }
  //     res.status(200).json(results.row)
  //   })
  // }

// const getLibraryCatalog = (req,res) =>{
//   //const id = parseInt(req.params.id)
//   bd.query('SELECT * FROM Library_Books JOIN Library_Books WHERE id=')
// }
