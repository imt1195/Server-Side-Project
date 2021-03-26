// const book_data = require('../library')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'The Giver', Author: 'Lois Lowry', YearPublished: 1993, Genre: 'fiction', Pages: 192},
        {id: 2, title: 'Between The World And Me', Author: 'Ta-Nehisi Coates', YearPublished: 2015, Genre: 'Nonfiction', Pages: 176},
        {id: 3, title: 'The Great Gatsby', Author: 'F. Scott Fitzgerald', YearPublished: 1925, Genre: 'fiction', Pages: 218}
      ]);
    });
};
