
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('messages', function(t){
    t.increments('id')
    t.integer('user_id')
    t.string('text')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages')
};
