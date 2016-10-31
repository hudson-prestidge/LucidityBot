
exports.up = function(knex, Promise) {
  return knex.schema.table('commands', function(t) {
    t.string('summoner').defaultTo("")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('commands', function(t){
    t.dropColumn('summoner')
  })
};
