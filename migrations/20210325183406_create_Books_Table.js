//create Library table
exports.up = function (knex) {
  return knex.schema.createTable('library', function (table) {
      table.increments('id')
      table.string('LibraryName')
      table.string('Location')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('library')
};