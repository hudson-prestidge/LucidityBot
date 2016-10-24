var irc = require('irc');
var passwords = require('./password')
var config = require('./knexfile').development
var knex = require('knex')(config)
var cron = require('node-cron')

var client

function init(){
  console.log("LucidityBot 1.0 reporting for duty!");

  client = new irc.Client('irc.chat.twitch.tv', 'LucidityBot', {
    channels: ['#Charcon'],
    password: passwords.twitchPassword,
  });

  setScheduledCommands();

  client.addListener('message', function (from, channel, message) {
    logMessage(from, channel, message)
    var match = message.match(/!(\w+)/)
    if(match){
      processCommmand(message, match[1])
    }else{
      checkForTriggerPhrase(message)
    }
  })

  client.addListener('error', function(message) {
    console.log('error: ', message);
  })
}

function setScheduledCommands() {
  knex('scheduled_commands')
    .innerJoin('commands', 'scheduled_commands.command_id', 'commands.id')
    .then(function(commands){
      commands.map(function (command){

        setInterval( function(){runCommand(command)}, command.frequency*1000 )

        // let frequency = command.frequency
        // let hours = parseInt(frequency / 3600)
        // let minutes = parseInt((frequency % 3600) / 60)
        // let seconds = parseInt(frequency % 60)
        // let cronString = ""
        // seconds ? cronString += '*/' + seconds + " " : cronString += "0 "
        // minutes ? cronString += '*/' + minutes + " " : cronString += "* "
        // hours ? cronString += '*/' + hours + " " : cronString += "* "
        // cronString += "* * *"
        // console.log(cronString);
        // cron.schedule(cronString, function() {
        //   runCommand(command)
        // })
        // return command
      })
    })
}

function processCommmand(message, command) {
  knex('commands')
    .where({
      name: command,
      trigger: 'false'
    })
    .first()
    .then(runCommand)
}

function checkForTriggerPhrase(message){
  knex('commands')
    .where('trigger', true)
    .then(function(rows) {
      var command = rows.find(function(row) {
        return message.match(row.name)
      })
      if(command){
        runCommand(command)
      }
    })
}

function runCommand(command){
  if(command) {
    client.say("#Charcon", command.response)
  }
}

function logMessage(username, channel,  message) {
  upsertUser(username, function(userId){
    knex.insert({text: message, user_id: userId, channel: channel})
      .into('messages')
      .catch(logError)
  })
}

function upsertUser(username, callback) {
  knex('users')
    .where('name', username)
    .first()
    .then(function (user){
      if(user){
        callback(user.id)
      } else {
      //if the user is not in users table, add them and then perform callback with their id
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

init()
