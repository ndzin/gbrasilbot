const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Responde com Pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Responde com a info do Servidor!'),
	new SlashCommandBuilder().setName('user').setDescription('Responde com a info do usuário!'),
    new SlashCommandBuilder().setName('guia').setDescription('Envia um guia sobre o personagem selecionado!').addStringOption(option =>
		option.setName('personagem')
			.setDescription('Guia do Personagem:')
			.setRequired(true)
			.addChoices(
				{ name: 'Xiao', value: 'xiao' },
				{ name: 'Shenhe', value: 'shenhe' },
				{ name: 'Shikanoin Heizou', value: 'heizou' },
			)),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);