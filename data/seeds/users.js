
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, colName: 'Autumn'},
        {id: 2, colName: 'Luna'},
        {id: 3, colName: 'Gambit'}
      ]);
    });
};
