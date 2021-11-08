export function seed(knex) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {user_id: 1, company_id: 1},
        {user_id: 2, company_id: 2},
        {user_id: 3, company_id: 1},
        {user_id: 3, company_id: 3},
      ]);
    });
}