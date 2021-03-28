const Library = require("../library");

// const book_data = require('../library')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'The Giver', author: 'Lois Lowry', year_published: 1993, genre: 'Fiction', pages: 192, status:"Checked out", library_id: 1},
        {id: 2, title: 'Between The World And Me', author: 'Ta-Nehisi Coates', year_published: 2015, genre: 'Non-Fiction', pages: 176, status:"Avaliable", library_id: 2},
        {id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year_published: 1925, genre: 'Fiction', pages: 218, status:"Avaliable", library_id:  2},
        {id: 4, title: 'The Fifth Season', author: 'N. K. Jemisin', year_published: 2015, genre: 'Sci-Fiction', pages: 449, status:"Avaliable", library_id:  3},
        {id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee', year_published: 1960, genre: 'Fiction', pages: 399, status:"Avaliable", library_id:  4},
        {id: 6, title: 'A Brief History of Time', author: 'Stephen Hawking', year_published: 1988, genre: 'Non-Fiction', pages: 226, status:"Avaliable", library_id:  4},
        {id: 7, title: 'Monstress', author: 'Marjorie Liu & Sana Takeda', year_published: 2015, genre: 'Sci-Fiction', pages: 192, status:"Avaliable", library_id:  1},
        {id: 8, title: 'The Sun Also Rises', author: 'Ernest Hemingway', year_published: 1926, genre: 'Fiction', pages: 333, status:"Checked out", library_id:  2},
        {id: 9, title: 'The Brief Wondrous Life of Oscar Wao', author: 'Junot Díaz', year_published: 2007, genre: 'Fiction', pages: 360, status:"Avaliable", library_id:  5},
        {id: 10, title: 'Cosmos', author: 'Carl Sagan', year_published: 1980, genre: 'Non-Fiction', pages: 405, status:"Avaliable", library_id:  2},
        {id: 11, title: 'Into the Wild', author: 'Jon Krakauer', year_published: 1996, genre: 'Non-Fiction', pages: 262, status:"Avaliable", library_id:  5},
        {id: 12, title: 'The Alchemist', author: 'Paulo Coelho', year_published: 1988, genre: 'Fiction', pages: 179, status:"Avaliable", library_id:  1}
      ]);
    });
};
