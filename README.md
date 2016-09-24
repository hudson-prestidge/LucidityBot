# LucidityBot

current issues:

it's possible for users to send messages longer than the bot can parse. the bot will just throw an error and not store that message.
changing the type to the postgres 'text' data type will possibly fix this? look into it

want to add ability to add commands to the scheduled list

want to add nightbot's [touser] functionality
  -particularly for !shoutout and !blame
want to add moobot's league api functionality so we can pull in rank/runes
want to add mooobot's latest youtube url functionality (youtube api?) and current time functionality

theoretically it would be sweet to have the songrequest stuff built in. in practise, this seems like a huge pita
and it's almost certainly better to let nightbot handle it. In the interests of trying to get the bot to do all the
jobs of the bots it's replacing though, this needs to go on the list.
