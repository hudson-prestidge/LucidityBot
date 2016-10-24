
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scheduled_commands').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('scheduled_commands').insert({id: 1, command_id: 20, frequency: 60000 })
      ]);
    });
};
