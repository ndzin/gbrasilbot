const Discord = require('discord.js');
const dotenv = require('dotenv');
const { EmbedBuilder } = require('discord.js');
const { ActivityType } = require('discord.js');
const { Collection } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

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
        "GuildMessageTyping"
    ],
});



client.once('ready', () => {
    client.user.setActivity('você digitar /build !', { type: ActivityType.Watching });
    client.user.setStatus('online');
	console.log('Ready!');
});

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
    client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Erro ao executar seu comando!', ephemeral: true });
	}
});

client.login('MTAwMTYzMzM5MzA3MjY4NTEyOA.GurKB5.fGKWRlhRgLyyrPO_tn8PRzSFErsx1rceqRO5vQ')