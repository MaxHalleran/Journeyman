
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('test').del()
    .then(function () {
      // Inserts seed entries
      return knex('test').insert([
        {id: 1, name: 'Autumn'},
        {id: 2, name: 'Luna'},
        {id: 3, name: 'Gambit'}
      ]);
    });
};
