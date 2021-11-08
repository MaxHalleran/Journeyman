
export function seed(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          email: 'Autumn@email.com',
          password_digest: 'password',
          first_name: 'Autumn',
          last_name: 'Cat'
        },
        {
          id: 2,
          email: 'Gambit@email.com',
          password_digest: 'password',
          first_name: 'Gambit',
          last_name: 'Halleran'
        },
        {
          id: 3,
          email: 'Luna@email.com',
          password_digest: 'password',
          first_name: 'Luna',
          last_name: 'Lovewhore'
        },
		{
          id: 4,
          email: 'maxhalleran@gmail.com',
          password_digest: 'password',
          first_name: 'Max',
          last_name: 'Halleran'
        },
      ]);
    });
}