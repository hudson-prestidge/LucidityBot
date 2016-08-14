
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('commands', function(t){
    t.increments('id')
    t.string('name')
    t.string('response')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('commands')
};
