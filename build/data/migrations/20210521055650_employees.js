"use strict";
exports.up = function (knex) {
    return knex.schema.createTable('employees', function (tbl) {
        tbl.integer('user_id').notNullable().references('id').inTable('user').onDelete('cascade');
        tbl.integer('company_id').notNullable().references('id').inTable('company').onDelete('cascade');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('employees');
};
