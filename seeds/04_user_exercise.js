exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user_exercise"; ALTER SEQUENCE user_exercise_id_seq RESTART WITH 10;')
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('user_exercise').insert({
          id: 1,
          date: new Date(),
          sets: 3,
          repetitions: 12,
          exercise_id: 1,
          user_id: 3,
          weight: 25
        }),
        knex('user_exercise').insert({
          id: 2,
          date: new Date(),
          sets: 3,
          repetitions: 12,
          exercise_id: 2,
          user_id: 3,
          weight: 25
        }),
        knex('user_exercise').insert({
          id: 3,
          date: new Date(),
          sets: 3,
          repetitions: 12,
          exercise_id: 5,
          user_id: 3,
          weight: 25
        }),
        knex('user_exercise').insert({
          id: 4,
          date: new Date(),
          sets: 4,
          repetitions: 10,
          exercise_id: 4,
          user_id: 2,
          weight: 25
        }),
        knex('user_exercise').insert({
          id: 5,
          date: new Date(),
          sets: 4,
          repetitions: 10,
          exercise_id: 3,
          user_id: 2,
          weight: 25
        }),
        knex('user_exercise').insert({
          id: 6,
          date: new Date(),
          sets: 4,
          repetitions: 10,
          exercise_id: 6,
          user_id: 2,
          weight: 25
        }),
        knex('user_exercise').insert({
          id: 7,
          date: new Date(),
          sets: 2,
          repetitions: 50,
          exercise_id: 6,
          user_id: 1,
          weight: 25
        }),
        knex('user_exercise').insert({
          id: 8,
          date: new Date(),
          sets: 3,
          repetitions: 20,
          exercise_id: 6,
          user_id: 1,
          weight: 25
        }),
        knex('user_exercise').insert({
          id: 9,
          date: new Date(),
          sets: 4,
          repetitions: 10,
          exercise_id: 8,
          user_id: 1,
          weight: 25
        }),
      ]);
    });
};
