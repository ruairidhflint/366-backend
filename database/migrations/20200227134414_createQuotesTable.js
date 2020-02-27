exports.up = function(knex) {
  return knex.schema.createTable('quotes', table => {
    table.increments();
    table
      .string('quote')
      .notNullable()
      .unique();
    table.string('author').notNullable();
    table.string('url').notNullable();
    table
      .integer('dayOfYear')
      .notNullable()
      .unsigned()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('quotes');
};
