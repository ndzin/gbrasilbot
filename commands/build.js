const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

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
            .addFields({ name: 'Arma', value: 'Lança', inline: true })
            .setImage('https://i.imgur.com/r1qt2YY.png')
            .setTimestamp()
            .setFooter({ text: '@genshin_brasil', iconURL: 'https://genshin.honeyhunterworld.com/img/icons/element/anemo_35.png' });

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
        .addFields({ name: 'Arma', value: 'Lança', inline: true })
        .setImage('https://i.imgur.com/n31x8Qe.png')
        .setTimestamp()
        .setFooter({ text: '@genshin_brasil', iconURL: 'https://genshin.honeyhunterworld.com/img/icons/element/cryo_35.png' });

const EmbedKazuha = new EmbedBuilder()
        .setColor(0x0c2d29)
        .setAuthor({ name: 'Kaedehara Kazuha ✦ EM Support Build' })
        .setDescription('*Um samurai errante do outrora famoso Clã Kaedehara, Kazuha é um membro da tripulação da Frota Crux, acolhido por Beidou depois de ser declarado um criminoso por Baal por tirar uma visão de suas mãos.*')
        .setThumbnail('https://genshin.honeyhunterworld.com/img/char/kazuha.png')
        .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Anemo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espada', inline: true })
    .setImage('https://i.imgur.com/ikrrXQg.png')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil' });


module.exports = {
    data: new SlashCommandBuilder()
        .setName('build')
        .setDescription('Envia um guia sobre o personagem selecionado!')
        .addStringOption(option =>
		option.setName('personagem')
		.setDescription('Guia do Personagem:')
		.setRequired(true)
		.addChoices(
			{ name: 'Xiao', value: 'xiao' },
			{ name: 'Shenhe', value: 'shenhe' },
			{ name: 'Shikanoin Heizou', value: 'heizou' },
            { name: 'Kaedehara Kazuha', value: 'kazuha' },
		)),
        async execute(interaction) {
            const build = interaction.options.get('personagem').value;
            if (build === 'xiao') {    
                await interaction.reply({ embeds: [EmbedXiao] });
            } else if (build === 'shenhe') {
                await interaction.reply({ embeds: [EmbedShenhe] });
            } else if (build === 'heizou') {
                await interaction.reply({ embeds: [EmbedHeizou] });
            } else if (build === 'kazuha') {
                await interaction.reply({ embeds: [EmbedKazuha] });
            } 
        },
};
