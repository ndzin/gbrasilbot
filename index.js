const Discord = require('discord.js');
const dotenv = require('dotenv');
const { EmbedBuilder } = require('discord.js');
const { ActivityType } = require('discord.js');

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
    client.user.setActivity('você digitar /build ! hehe', { type: ActivityType.Watching });
    client.user.setStatus('online');
	console.log('Ready!');
});



client.on('interactionCreate', async interaction => {
	if (interaction.isChatInputCommand()) {

	    const { commandName } = interaction;

	    if (commandName === 'ping') {
	    	await interaction.reply('Pong!');
	    } else if (commandName === 'server') {
	    	await interaction.reply('Server info.');
	    } else if (commandName === 'user') {
	    	await interaction.reply(`Seu nick: ${interaction.user.tag}\nSeu id: ${interaction.user.id}`);
	    } else if (commandName === 'guia') {
            const guia = interaction.options.get('personagem').value;
            if (guia === 'xiao') {
            const EmbedXiao = new EmbedBuilder()
            .setColor(0x002529)
            .setAuthor({ name: 'Guia Xiao', iconURL: 'https://genshin.honeyhunterworld.com/img/char/xiao_face.png' })
            .setDescription('Confira abaixo um guia resumido do Personagem Anemo, Xiao!')
            .setThumbnail('https://genshin.honeyhunterworld.com/img/char/xiao.png')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
                { name: 'Elemento', value: 'Anemo', inline: true },
            )
            .addFields({ name: 'Arma', value: 'Lanceiro', inline: true })
            .setImage('https://i.imgur.com/r1qt2YY.png')
            .setTimestamp()
            .setFooter({ text: '@genshin_brasil', iconURL: 'https://genshin.honeyhunterworld.com/img/icons/element/anemo_35.png' });
    
            await interaction.reply({ embeds: [EmbedXiao] });
         
        } else if (guia === 'shenhe') {
            const EmbedShenhe = new EmbedBuilder()
            .setColor(0x002529)
            .setAuthor({ name: 'Guia Shenhe', iconURL: 'https://genshin.honeyhunterworld.com/img/char/shenhe_face.png' })
            .setDescription('Confira abaixo um guia resumido da Personagem Cryo, Shenhe!')
            .setThumbnail('https://genshin.honeyhunterworld.com/img/char/shenhe.png')
            .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
            { name: 'Elemento', value: 'Cryo', inline: true },
        )
        .addFields({ name: 'Arma', value: 'Lanceira', inline: true })
        .setImage('https://i.imgur.com/n31x8Qe.png')
        .setTimestamp()
        .setFooter({ text: '@genshin_brasil', iconURL: 'https://genshin.honeyhunterworld.com/img/icons/element/cryo_35.png' });
    
        await interaction.reply({ embeds: [EmbedShenhe] });
        } 
    } 
    }}
);

client.login('MTAwMTYzMzM5MzA3MjY4NTEyOA.GQPy2z.XICsgBs2DEIgzeBXv8ZXTqVL-afvnlrBMK6_RU')