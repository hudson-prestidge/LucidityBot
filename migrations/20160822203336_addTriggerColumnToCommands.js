
exports.up = function(knex, Promise) {
  return knex.schema.table('commands', function(t) {
    t.boolean('trigger').defaultTo(false).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('commands', function(t){
    t.dropColumn('trigger')
  })
};
