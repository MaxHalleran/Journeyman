"use strict";
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('company').del()
        .then(function () {
        // Inserts seed entries
        return knex('company').insert([
            { id: 1, company_name: 'Roses Co.' },
            { id: 2, company_name: 'Tulips Tertiary' },
            { id: 3, company_name: 'Dandy Lions R Us' }
        ]);
    });
};
