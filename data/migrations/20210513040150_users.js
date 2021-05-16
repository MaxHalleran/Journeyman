
exports.up = function(knex) {
	knex.schema.createTable("users", tbl => {
		tbl.increments();
		tbl.text("username", 128).notNullable();
	});
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("users");
};
