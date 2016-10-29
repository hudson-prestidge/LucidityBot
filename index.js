var irc = require('irc');
var passwords = require('./password')
var config = require('./knexfile').development
var knex = require('knex')(config)
var cron = require('node-cron')

var client

init = () => {
  console.log("LucidityBot 1.0 reporting for duty!");

  client = new irc.Client('irc.chat.twitch.tv', 'LucidityBot', {
    channels: ['#Charcon'],
    password: passwords.twitchPassword,
  });

  setScheduledCommands();

  client.addListener('message', (from, channel, message) => {
    logMessage(from, channel, message)
    var match = message.match(/!(\w+)/)
    if(match){
      processCommmand(message, match[1])
    }else{
      checkForTriggerPhrase(message)
    }
  })

  client.addListener('error', message => {
    console.log('error: ', message);
  })
}

var setScheduledCommands = () => {
  var scheduled_commands = []
  knex('scheduled_commands')
    .innerJoin('commands', 'scheduled_commands.command_id', 'commands.id')
    .then(commands => {
      scheduled_commands = commands.map(command => {
        return setInterval( () => {runCommand(command)}, command.frequency*1000 )
      })
    })
}

var getSummonerRank = id => request('https://oce.api.pvp.net/api/lol/oce/v2.5/league/by-summoner/402614/entry?api_key=' + RIOT_GAMES_API_KEY)
                              .end((err,res) => JSON.parse(res.text))

var processCommmand = (message, command) => {
  knex('commands')
    .where({
      name: command,
      trigger: 'false'
    })
    .first()
    .then(runCommand)
}

var checkForTriggerPhrase = message => {
  knex('commands')
    .where('trigger', true)
    .then(rows => {
      var command = rows.find(row => message.match(row.name))
      if(command){
        runCommand(command)
      }
    })
}

var runCommand = command => if(command) { client.say("#Charcon", command.response) }

var logMessage = (username, channel,  message) => {
  upsertUser(username, userId => {
    knex.insert({text: message, user_id: userId, channel: channel})
      .into('messages')
      .catch(logError)
  })
}

var upsertUser = (username, callback) => {
  knex('users')
    .where('name', username)
    .first()
    .then(user => {
      if(user){
        callback(user.id)
      } else {
        knex.insert({name: username}, 'id')
          .into('users')
          .then(ids => {
            callback(ids[0])
          })
        }
    })
}


var logError = err => console.log(err)

init()
