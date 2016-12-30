exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "muscle_group"; ALTER SEQUENCE muscle_group_id_seq RESTART WITH 7;')
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('muscle_group').insert({
          id: 1,
          group_name: 'Chest',
        }),
        knex('muscle_group').insert({
          id: 2,
          group_name: 'Back',
        }),
        knex('muscle_group').insert({
          id: 3,
          group_name: 'Arms',
        }),
        knex('muscle_group').insert({
          id: 4,
          group_name: 'Shoulders',
        }),
        knex('muscle_group').insert({
          id: 5,
          group_name: 'Legs',
        }),
        knex('muscle_group').insert({
          id: 6,
          group_name: 'Core',
        }),
      ]);
    });
};
