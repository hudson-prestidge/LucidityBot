var irc = require('irc');
var passwords = require('./password')
var config = require('./knexfile').development
var knex = require('knex')(config)

knex('commands')
  .then(function(commands){
    console.log("these are all the commands!", commands)
  })

var client = new irc.Client('irc.chat.twitch.tv', 'LucidityBot', {
  channels: ['#Charcon'],
  password: passwords.twitchPassword,
});

client.join("#Charcon", function (res, err){
  client.say("#Charcon", "Hello there, I'm LucidityBot!")
})

client.addListener('message', function (from, to, message) {

  var promise = checkForCommand(message)
  promise.then(function(command) {
    console.log(command)
    if(command) {
      client.say("#Charcon", command.response)
    }
  })


});

function checkForCommand(message) {
  var match = message.match(/!(\w+)/)
  if (match){
    firstWord = match[1]
    return knex('commands')
    .where('name', firstWord)
    .first()
  }
}

client.addListener('error', function(message) {
    console.log('error: ', message);
});
