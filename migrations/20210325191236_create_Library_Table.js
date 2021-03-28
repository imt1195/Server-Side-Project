//create books table
exports.up = function (knex) {
    return knex.schema.createTable('books', function (table) {
      table.increments('id')
      table.string('title')
      table.string('author')
      table.integer('year_published')
      table.string('genre')
      table.integer('pages')
      table.string('status')
      table.integer('library_id')
      table.foreign('library_id').references('library.id')
    })
  };
  
exports.down = function (knex) {
    return knex.schema.dropTable('books')
};
