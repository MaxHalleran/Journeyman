
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, username: 'Autumn'},
        {id: 2, username: 'Luna'},
        {id: 3, username: 'Gambit'}
      ]);
    });
};
