exports.up = function(knex, Promise) {
  return knex.schema.createTable("games", tbl => {
    tbl.string("title", 128).notNull();

    tbl.string("genre", 128).notNull();

    tbl.integer("releaseYear");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("games", tbl => {});
};
