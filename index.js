var irc = require('irc');
var passwords = require('./password')

var commands = ['!lucitest']

var client = new irc.Client('irc.chat.twitch.tv', 'LucidityBot', {
  channels: ['#charcon'],
  password: passwords.twitchPassword,
});

client.join("#charcon", function (res, err){
  client.say("#charcon", "Hello there, I'm LucidityBot!")
})


client.addListener('message', function (from, to, message) {
    // client.say("#charcon", from + ", I am hearing you talk!")
    if(checkIsCommand(message)){
      client.say("#charcon", "you are calling the " + checkIsCommand(message) + " command!"  )
    }
});

// client.addListener('pm', function (from, message) {
//   client.say('Charcon', "SRSLY, I AM A BOT!");
// });

//somehow it's smart enough to log stuff only once?
// client.addListener('message#Charbot', function (from, message) {
//   console.log(from + ' => #Charbot: ' + message);
//   client.say('#Charbot', "I'm a bot!");
// });

client.addListener('error', function(message) {
    console.log('error: ', message);
});

function checkIsCommand (message){
  var startOfMessage = ''
  for (var i = 0; i < commands.length; i++){
    startOfMessage = message.substring(0, commands[i].length)
    if (startOfMessage == commands[i]){
      return commands[i]
    }
  }
  return false
 }
