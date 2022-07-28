const Discord = require('discord.js');
const dotenv = require('dotenv');

const prefix = '!';

const client = new Discord.Client({
    allowedMentions: {
        parse: [`users`, `roles`],
        repliedUser: true,

    },
    intents: [
        "Guilds",,
        "GuildMessages",
        "GuildPresences",
        "GuildMembers",
        "GuildMessageReactions",
    ],
});

client.on("ready", () => {
    console.log("Bot on krl!")
})

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        message.channel.send('Pong!')
    }
})

client.login(process.env.TOKEN)