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
  if(promise){
    promise.then(function(command) {
      if(command) {
        client.say("#Charcon", command.response)
      }
    }).catch(logError)
  }
  logMessage(from, message)

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

function logMessage(username, message) {
  upsertUser(username, function(userId){
    knex.insert({text: message, user_id: userId})
      .into('messages')
      .catch(logError)
  })


}

client.addListener('error', function(message) {
    console.log('error: ', message);
});

function upsertUser(username, callback) {
   knex('users')
     .where('name', username)
     .first()
     .then(function (user){
        if(user){
          callback(user.id)
        }
        //if the user is not in users table, add them and then return their id
        else {
           knex.insert({name: username}, 'id')
            .into('users')
            .then(function(ids) {
              callback(ids[0])
            })
        }
    })
}

function logError(err) {
  console.log(err)
}
