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
  checkForCommand(message)
    // client.say("#Charcon", from + ", I am hearing you talk!")
    // if(checkForCommand(message)){
    //   client.say("#Charcon", "you are calling the " + checkForCommand(message) + " command!"  )
    // }
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

 //essentially what we want is check the text you've just seen for a command
  // this means go through the commands, and check if the substring at the start
  // of the message matches that command. If it does, the message contains that command.

  function checkForCommand(message) {
    // var firstword = message.split(' ')[0]
    var match = message.match(/!(\w+)/)
    if (match){
      firstWord = match[1]
      knex('commands')
      .where('name', firstWord)
      .first()
      .then(function(command){
        client.say("#Charcon", command.response)
      })
    }
  }
