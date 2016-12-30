exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_exercise', function(table){
    table.increments(),
    table.datetime('date');
    table.integer('sets');
    table.integer('repetitions');
    table.integer('exercise_id').references('exercise.id').unsigned();
    table.integer('user_id').references('user.id').unsigned();

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_exercise');
};
