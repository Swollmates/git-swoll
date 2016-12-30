exports.up = function(knex, Promise) {
  return knex.schema.createTable('workout', table => {
    table.increments();
    table.text('name').notNullable();
    table.integer('user_exercise_id').notNullable().references('user_exercise.id').unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('workout');
};
