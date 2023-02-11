const Discord = require('discord.js');
const dotenv = require('dotenv');
const { EmbedBuilder } = require('discord.js');
const { ActivityType } = require('discord.js');
const { Collection } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
require('dotenv').config();


const client = new Discord.Client({
    allowedMentions: {
        parse: [`users`, `roles`],
        repliedUser: true,

    },
    intents: [
        "Guilds",
        "GuildMessages",
        "GuildPresences",
        "GuildMembers",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "MessageContent"
    ],
});

module.exports = client

client.once('ready', () => {
    client.user.setActivity(`Bot da GenshinPalace!`, { type: ActivityType.Watching });
    client.user.setStatus('online');
});


const EmbedPronome = new EmbedBuilder()
    .setColor(0x8e2cb1)
    .setThumbnail('https://cdn.discordapp.com/attachments/994744837066731530/1003143693563351070/gegesgegesg.png')
    .setTitle('**__Pronomes__**')
    .setDescription('Escolha o cargo que define o pronome utilizado por você!')
    .addFields(
        { name: '\u200B', value: '<@&1001639698818662411>\n<@&1001639698277609483>\n<@&1001639696826372176>' },

    )
    .setFooter({ text: '@genshin_brasil' });

client.on('guildMemberRemove', async member => {
    const membros = member.guild.memberCount;
    client.user.setActivity(`${membros} membros na Genshin Palace!`, { type: ActivityType.Watching })

})


client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
    }
});

client.login(process.env.TOKEN);