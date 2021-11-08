export function up(knex, Promise) {
	return knex.schema.createTable('user', function(tbl) {
		tbl.increments('id');
		tbl.string('email').notNullable();
		tbl.string('password_digest');
		tbl.string('first_name');
		tbl.string('last_name');
	});
}

export function down(knex, Promise) {
  return knex.schema.dropTableIfExists('user');
}
