
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('commands').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('commands').insert({id: 1, name: "anth", response: "Yeah, fuck that guy."}),
        knex('commands').insert({id: 2, name: "banana", response: "The unexpected banana is the fruitiest."}),
        knex('commands').insert({id: 3, name: "booty", response: "https://instagram.com/p/3ajoIQCUNZ/"}),
        knex('commands').insert({id: 4, name: "cam", response: "No cam today because I don't feel like it! There's nothing wrong panicBasket"}),
        knex('commands').insert({id: 5, name: "cat", response: "Kippa WEOW Kippa"}),
        knex('commands').insert({id: 6, name: "chair", response: "Chair is love, Chair is life."}),
        knex('commands').insert({id: 7, name: "hello", response: "HELLO TEAM!?!? HELLO?"}),
        knex('commands').insert({id: 8, name: "hello2", response: "HELLO! IS IT ME YOU'RE LOOKING FOR?"}),
        knex('commands').insert({id: 9, name: "hello3", response: "HELLO FROM THE OTHER SIDE! I MUST'VE CALLED A THOUSAND TIMES!"}),
        knex('commands').insert({id: 10, name: "jisoo", response: "Look at this sexy man-cat! https://41.media.tumblr.com/a944224e02daa18d4f100958207122e6/tumblr_mk7ge3necC1s0h916o1_500.jpg"}),
        knex('commands').insert({id: 11, name: "jiwoo", response: "The superior animal man. Obviously, stupid. http://tinyurl.com/qcqruww Hey stupid, click the link."}),
        knex('commands').insert({id: 12, name: "joke", response: "	THEY GOT THE JOKE! PogChamp"}),
        knex('commands').insert({id: 13, name: "xanhero", response: "Yeah, fuck that guy."}),
        knex('commands').insert({id: 14, name: "weow", response: "	Kippa CAT Kippa"}),
        knex('commands').insert({id: 15, name: "battletag", response: "Rivie#1189"}),
        knex('commands').insert({id: 16, name: "bf", response: "WHAT IS BF?"}),
        knex('commands').insert({id: 17, name: "boobs", response: "No you!"}),
        knex('commands').insert({id: 18, name: "donate", response: "Donate Here! https://www.twitchalerts.com/donate/UnexpectedBanana"}),
        knex('commands').insert({id: 19, name: "eng", response: "English is highly preferred, it's all I know Keepo"}),
        knex('commands').insert({id: 20, name: "follow", response: "Don't forget to follow the stream! I like being stalked, you follow me?"}),
        knex('commands').insert({id: 21, name: "mod", response: "No."}),
        knex('commands').insert({id: 22, name: "name", response: "It's a Soraka reference. WHAT WERE YOU THINKING?!"}),
        knex('commands').insert({id: 23, name: "social", response: "Facebook: https://www.facebook.com/champloolara Random photos: http://instagram.com/champloo_lara Youtube: https://www.youtube.com/user/Rivonly Twitter : https://twitter.com/ChamplooLara"}),
        knex('commands').insert({id: 24, name: "song", response: "Song requests are on Thursday, esteemed associate! Your enquiry is most assuredly appreciated."}),
        knex('commands').insert({id: 25, name: "steam", response: "Steam name is : Champloo <3 (Alternatively, use this link: http://steamcommunity.com/profiles/76561198124875648/ )"}),
        knex('commands').insert({id: 26, name: "song", response: "Song requests are on Thursday, esteemed associate! Your enquiry is most assuredly appreciated."}),
        knex('commands').insert({id: 27, name: "playlist", response: "I try to use a variety of playlists from Spotify, but I get most of my songs from this playlist: http://open.spotify.com/user/rivantha/playlist/0Wh8ciQWapDCNxWqATP4Kd"}),
        knex('commands').insert({id: 28, name: "res", response: "Please respect the streamer and all users at all times. Thank you for cooperating with the Moderation Department! :)"}),
        knex('commands').insert({id: 29, name: "setup", response: "Lara's current setup is: Blue Yeti Mic, Logitech G500s Mouse, Tt eSPORTS Gaming Keyboard, GTX 770 Graphics Card, Intel Core i7 4790 , ASUS MAXIMUS Vii Hero Motherboard"}),
        knex('commands').insert({id: 30, name: "server", response: "Lara plays on the oceanic league of legends server!", trigger: true}),
        knex('commands').insert({id: 31, name: "marry", response: "I've already done some time.", trigger: true}),
        knex('commands').insert({id: 32, name: "bot", response: "Hiya! I'm LucidityBot or Luci for short. Some idiot made me for no good reason."})
      ]);
    });
};
