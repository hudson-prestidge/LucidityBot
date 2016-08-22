
exports.up = function(knex, Promise) {
  return knex.schema.table('messages', function(t) {
    t.string('channel')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('messages', function(t){
    t.dropColumn('channel')
  })
};
