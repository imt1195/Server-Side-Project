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
  static async getLibraryCatalog(LibrId){
    try{
    console.log("getting Library Catalog")
    let bookList = await db.any('select * from books join library on library.id=$1 where library_id=$1;', LibrId)
    console.log(bookList)
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
