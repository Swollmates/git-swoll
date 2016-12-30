
exports.up = function(knex, Promise) {
  return knex.schema.createTable('muscle_group', table => {
    table.increments();
    table.text('group_name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('muscle_group');
};
