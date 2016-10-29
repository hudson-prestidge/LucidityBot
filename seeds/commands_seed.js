
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('commands').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('commands').insert({name: "anth", response: "Yeah, fuck that guy."}),
        knex('commands').insert({name: "banana", response: "The unexpected banana is the fruitiest."}),
        knex('commands').insert({name: "booty", response: "https://instagram.com/p/3ajoIQCUNZ/"}),
        knex('commands').insert({name: "cam", response: "No cam today because I don't feel like it! There's nothing wrong panicBasket"}),
        knex('commands').insert({name: "cat", response: "Kippa WEOW Kippa"}),
        knex('commands').insert({name: "chair", response: "Chair is love, Chair is life."}),
        knex('commands').insert({name: "hello", response: "HELLO TEAM!?!? HELLO?"}),
        knex('commands').insert({name: "hello2", response: "HELLO! IS IT ME YOU'RE LOOKING FOR?"}),
        knex('commands').insert({name: "hello3", response: "HELLO FROM THE OTHER SIDE! I MUST'VE CALLED A THOUSAND TIMES!"}),
        knex('commands').insert({name: "jisoo", response: "Look at this sexy man-cat! https://41.media.tumblr.com/a944224e02daa18d4f100958207122e6/tumblr_mk7ge3necC1s0h916o1_500.jpg"}),
        knex('commands').insert({name: "jiwoo", response: "The superior animal man. Obviously, stupid. http://tinyurl.com/qcqruww Hey stupid, click the link."}),
        knex('commands').insert({name: "joke", response: "	THEY GOT THE JOKE! PogChamp"}),
        knex('commands').insert({name: "xanhero", response: "Yeah, fuck that guy."}),
        knex('commands').insert({name: "weow", response: "	Kippa CAT Kippa"}),
        knex('commands').insert({name: "battletag", response: "Rivie#1189"}),
        knex('commands').insert({name: "bf", response: "WHAT IS BF?"}),
        knex('commands').insert({name: "boobs", response: "No you!"}),
        knex('commands').insert({name: "donate", response: "Donate Here! https://www.twitchalerts.com/donate/UnexpectedBanana"}),
        knex('commands').insert({name: "eng", response: "English is highly preferred, it's all I know Keepo"}),
        knex('commands').insert({name: "follow", response: "Don't forget to follow the stream! I like being stalked, you follow me?"}),
        knex('commands').insert({name: "mod", response: "No."}),
        knex('commands').insert({name: "name", response: "It's a Soraka reference. WHAT WERE YOU THINKING?!"}),
        knex('commands').insert({name: "sub", response: "Lara doesn't have a sub button, and most likely won't get one in the near future due to needing more viewers BibleThump You can still donate though!"}),
        knex('commands').insert({name: "dessert", response: "She asks me if I want this dessert thing I say no and it's always are you sure? God damnit JUST ACCEPT THE NO!"}),
        knex('commands').insert({name: "social", response: "Facebook: https://www.facebook.com/champloolara Random photos: http://instagram.com/champloo_lara Youtube: https://www.youtube.com/user/Rivonly Twitter : https://twitter.com/ChamplooLara"}),
        knex('commands').insert({name: "song", response: "Song requests are on Thursday, esteemed associate! Your enquiry is most assuredly appreciated."}),
        knex('commands').insert({name: "steam", response: "Steam name is : Champloo <3 (Alternatively, use this link: http://steamcommunity.com/profiles/76561198124875648/ )"}),
        knex('commands').insert({name: "song", response: "Song requests are on Thursday, esteemed associate! Your enquiry is most assuredly appreciated."}),
        knex('commands').insert({name: "runes", response: "The runes and masteries of Champloo (Lara's main) are availble here - http://www.lolking.net/summoner/oce/402614#runes-and-masteries"),
        knex('commands').insert({name: "masteries", response: "The runes and masteries of Champloo (Lara's main) are availble here - http://www.lolking.net/summoner/oce/402614#runes-and-masteries"),
        knex('commands').insert({name: "playlist", response: "I try to use a variety of playlists from Spotify, but I get most of my songs from this playlist: http://open.spotify.com/user/rivantha/playlist/0Wh8ciQWapDCNxWqATP4Kd"}),
        knex('commands').insert({name: "res", response: "Please respect the streamer and all users at all times. Thank you for cooperating with the Moderation Department! :)"}),
        knex('commands').insert({name: "setup", response: "Lara's current setup is: Blue Yeti Mic, Logitech G500s Mouse, Tt eSPORTS Gaming Keyboard, GTX 770 Graphics Card, Intel Core i7 4790 , ASUS MAXIMUS Vii Hero Motherboard"}),
        knex('commands').insert({name: "server", response: "Lara plays on the oceanic league of legends server!", trigger: true}),
        knex('commands').insert({name: "marry", response: "I've already done some time.", trigger: true}),
        knex('commands').insert({name: "bot", response: "Hiya! I'm LucidityBot or Luci for short. Some idiot made me for no good reason."})
      ]);
    });
};
