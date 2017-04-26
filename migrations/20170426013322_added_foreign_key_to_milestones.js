
exports.up = function(knex) {
  return knex.schema.table('milestones', (table) =>{
    table.integer('famous_person_id')
        .notNullable()
        .references('id')
        .inTable('famous_people')
        .onDelete('CASCADE')
        .index();
  })
};

exports.down = function(knex) {
  return knex.schema.table('milestones', (table) => {
    table.dropColum('famous_person_id');
  })
};
