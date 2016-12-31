exports.up = function(knex, Promise) {
  return knex.schema.createTable('exercise', table => {
    table.increments();
    table.text('name').notNullable();
    table.integer('muscle_group').notNullable().references('muscle_group.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('exercise');
};
