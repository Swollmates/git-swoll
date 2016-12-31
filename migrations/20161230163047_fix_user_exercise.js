exports.up = function(knex, Promise) {
  return knex.schema.table('user_exercise', table =>{
    table.integer('weight').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('user_exercise', table =>{
    table.dropColumn('weight');
  });
};
