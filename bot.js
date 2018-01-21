const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "!"

bot.on('message', (message) => {;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return

    if (command === 'spider'){
        var images = ["./spiders/spider1.jpg","./spiders/spider2.jpg","./spiders/spider3.jpg","./spiders/spider4.jpg"];
        var rand = Math.floor(Math.random() * images.length);
        var randomImage = images[rand];
        var member=message.mentions.users
        message.channel.send("From The Iron Curtain team: wake up!", {
            files: [
              randomImage
            ]
          })
        
    }

});

bot.login("NDAyMjQxNDQ0ODAwMzY0NTU0.DT14FA.cJqrw-pxlDBaLqBzK-GCdUDYGxc");