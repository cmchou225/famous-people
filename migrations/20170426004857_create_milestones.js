
exports.up = function(knex) {
  return knex.schema.createTable('milestones', (table) => {
    table.increments();
    table.string('description');
    table.datetime('date_achieved');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('milestones');
};
