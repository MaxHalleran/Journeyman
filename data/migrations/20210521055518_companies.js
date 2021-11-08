export function up(knex) {
	return knex.schema.createTable('company', function(tbl) {
		tbl.increments('id');
		tbl.string('company_name');
	});
}

export function down(knex) {
	return knex.schema.dropTableIfExists('company');
}
