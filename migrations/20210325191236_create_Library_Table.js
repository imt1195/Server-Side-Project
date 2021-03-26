//create books table
exports.up = function (knex) {
    return knex.schema.createTable('books', function (table) {
      table.increments('id')
      table.string('title')
      table.string('Author')
      table.date('YearPublished')
      table.string('Genre')
      table.integer('Pages')
      table.integer('Library_Id')
      table.foreign('Library_Id').references('library.id')
    })
  };
  
exports.down = function (knex) {
    return knex.schema.dropTable('books')
};
