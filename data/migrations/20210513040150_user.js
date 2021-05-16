
exports.up = function(knex, Promise) {
	return knex.schema.createTable("user", function(tbl) {
		tbl.increments();
		tbl.text("username", 128).notNullable();
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user");
};
