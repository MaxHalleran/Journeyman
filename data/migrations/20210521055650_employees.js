export function up(knex) {
  return knex.schema.createTable('employees', function(tbl) {
    tbl.integer('user_id').notNullable().references('id').inTable('user').onDelete('cascade');
    tbl.integer('company_id').notNullable().references('id').inTable('company').onDelete('cascade');
  })
}

export function down(knex) {
  return knex.schema.dropTableIfExists('employees');
}
