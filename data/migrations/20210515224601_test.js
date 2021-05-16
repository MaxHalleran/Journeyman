
exports.up = function(knex) {
	knex.schema.createTable("test_table", tbl => {
		tbl.increments();
		tbl.text("name", 128).notNullable();
	});
};

exports.down = function(knex) {
	knex.schema.dropTableIfExists("users");
};
