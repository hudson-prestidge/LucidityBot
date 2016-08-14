
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(t){
    t.increments('id')
    t.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
