
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('scheduled_commands', function(t) {
    t.increments('id')
    t.integer('command_id')
    t.integer('frequency')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scheduled_commands')
};
