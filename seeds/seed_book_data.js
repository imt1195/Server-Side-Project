const Library = require("../library");

// const book_data = require('../library')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'The Giver', author: 'Lois Lowry', year_published: 1993, genre: 'fiction', pages: 192, status:"checked out", library_id: 1},
        {id: 2, title: 'Between The World And Me', author: 'Ta-Nehisi Coates', year_published: 2015, genre: 'Nonfiction', pages: 176, status:"avaliable", library_id: 2},
        {id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year_published: 1925, genre: 'fiction', pages: 218, status:"avaliable", library_id:  2}
      ]);
    });
};
