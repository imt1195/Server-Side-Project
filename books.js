//have to encapsulate in classes
const db = require('./db')
// const Library = require('./library')

class Books {
  constructor({id, title, author, year_published, genre, pages,status}){
    this.id = id
    this.title = title
    this.author = author
    this.year_published = year_published
    this.genre = genre
    this.pages = pages
    this.status = status
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
    const [book] = await db.query('select * from books where id = $1;', [id])
    if(book){
      console.log(new this(book))
      return new this(book)
    }else{
      throw error 
    }
  } 

  //update book data
  static async updateBook(id,newStatus) {
    await db.none('update books set status=$2 where id=$1;',
      [id, newStatus]
    )
  }

  //delete a book
  static async deleteBook(id) {
    await db.query('delete from books where id=$1;', [id])
  }

 //not fully working yet 
  //create/add a new book
  static async createBook({title, author, year_published, genre, pages, status, library_id}) {
    await db.query('insert into books (title, author, year_published, genre, pages, status, library_id) values ($1,$2,$3,$4,$5,$6, $7);',
     [title, author, year_published, genre, pages, status, library_id]
    )
  }
}

module.exports = Books;