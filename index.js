var irc = require('irc');
var passwords = require('./password')
var config = require('./knexfile').development
var knex = require('knex')(config)

knex('commands')
  .then(function(commands){
    console.log("these are all the commands!", commands)
  })

var client = new irc.Client('irc.chat.twitch.tv', 'LucidityBot', {
  channels: ['#charcon'],
  password: passwords.twitchPassword,
});

client.join("#charcon", function (res, err){
  client.say("#charcon", "Hello there, I'm LucidityBot!")
})

client.addListener('message', function (from, to, message) {
    // client.say("#charcon", from + ", I am hearing you talk!")
    // if(checkForCommand(message)){
    //   client.say("#charcon", "you are calling the " + checkForCommand(message) + " command!"  )
    // }
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

 //essentially what we want is check the text you've just seen for a command
  // this means go through the commands, and check if the substring at the start
  // of the message matches that command. If it does, the message contains that command.
