const db = require('./db')

//library class
class Library{
  constructor({id, LibraryName, Location, LeadLibrarian}){
    this.id = id;
    this.LibraryName = LibraryName;
    this.Location = Location;
    this.LeadLibrarian = LeadLibrarian;
  }
//find the books at each specific Library
  static async getLibraryCatalog(LibrId, books){
    try{
    //let bookList = await db.query('select title, author, library.id =$1, libraryname, Location, from library, books where books.library_id = library.id;', id)
    let bookList = await db.query('select * from books join library on library.id = books.library_id and books.library_id = LibrId')
    return bookList
    }catch(error){
      console.log(error)
    }
  }

  //list out the libraries: Names, Locations, and Lead Librarians
  static async getLibraries(){
      const LibraryList = await db.query('select * from library order by id asc;')
      return LibraryList
  }

}

module.exports = Library;
