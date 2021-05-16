
exports.up = function(knex, Promise) {
	return knex.schema.createTable("test", function(tbl) {
		tbl.increments();
		tbl.text("name", 128).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("test");
};
