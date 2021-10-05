"use strict";
exports.up = function (knex) {
    return knex.schema.createTable('company', function (tbl) {
        tbl.increments('id');
        tbl.string('company_name');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('company');
};
