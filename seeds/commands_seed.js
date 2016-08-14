
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('commands').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('commands').insert({id: 1, name: 'lucitest', response: 'wow, excellent testing!'}),
        knex('commands').insert({id: 2, name: 'songreq', response: 'song request day is on thursday, thanks for asking!'})
      ]);
    });
};
