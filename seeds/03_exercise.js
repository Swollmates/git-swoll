exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "exercise"; ALTER SEQUENCE exercise_id_seq RESTART WITH 13;')
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('exercise').insert({
          id: 1,
          name: 'Dumbbell Bench Press',
          muscle_group: 1
        }),
        knex('exercise').insert({
          id: 2,
          name: 'Arnold Press',
          muscle_group: 4
        }),
        knex('exercise').insert({
          id: 3,
          name: 'Shoulder Press',
          muscle_group: 4
        }),
        knex('exercise').insert({
          id: 4,
          name: 'Dumbbell Squat',
          muscle_group: 5
        }),
        knex('exercise').insert({
          id: 5,
          name: 'Dumbbell Curl',
          muscle_group: 3
        }),
        knex('exercise').insert({
          id: 6,
          name: 'Dumbbell Hammer Curl',
          muscle_group: 3
        }),
        knex('exercise').insert({
          id: 7,
          name: 'Dumbbell Tricep Extension',
          muscle_group: 3
        }),
        knex('exercise').insert({
          id: 8,
          name: 'Bent Over Row',
          muscle_group: 2
        }),
        knex('exercise').insert({
          id: 9,
          name: 'Chest Fly',
          muscle_group: 1
        }),
        knex('exercise').insert({
          id: 10,
          name: 'Push-ups',
          muscle_group: 1
        }),
        knex('exercise').insert({
          id: 11,
          name: 'Sit-ups',
          muscle_group: 6
        }),
        knex('exercise').insert({
          id: 12,
          name: 'Leg Lifts',
          muscle_group: 6
        }),
      ]);
    });
};
