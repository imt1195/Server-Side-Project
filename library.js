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
  static async getLibraryCatalog(id){
    // try{
    const bookList = await db.query('select title, author, library.id, LibraryName, Location, from library inner where library.id=$1 join books on Library_Id = library.id;')
    return res.json(bookList)
    // }catch(error){
    //   res.status(500).send(err)
    // }
  }

  //list out the libraries: Names, Locations, and Lead Librarians
  static async getLibraries(){
      const LibraryList = await db.query('select * from library order by id asc;')
      return res.json(LibraryList)
  }

}

module.exports = Library;