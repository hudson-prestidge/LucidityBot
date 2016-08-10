var irc = require('irc');
var passwords = require('./password')

var client = new irc.Client('irc.chat.twitch.tv', 'LucidityBot', {
  channels: ['#charcon'],
  password: passwords.twitchPassword,
});

client.join("#charcon", function (res, err){
  client.say("#charcon", "Hello there, I'm LucidityBot!")
})


client.addListener('message', function (from, to, message) {
    client.say("#charcon", "I am hearing you talk!")
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


//oauth:l78mwvvteasrg4exweknt4u9bfs6gm
