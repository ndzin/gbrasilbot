const { SlashCommandBuilder } = require('discord.js');
let Embeds = require('../database/ascensoes.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ascensao')
        .setDescription('Envia um guia de Ascensão sobre o personagem selecionado!')
        .addStringOption(option =>
            option.setName('personagem')
                .setDescription('Guia do Personagem:')
                .setRequired(false)
        ),
    async execute(interaction) {
        try {
            const ascget = interaction.options.get('personagem').value;
            const asc = ascget.toLocaleLowerCase();
            const char = Embeds[asc]

            await interaction.reply({ embeds: [char] });

        } catch {
            await interaction.reply('**・Comando utilizado de maneira errônea!**\n┗ *Para mais detalhes, digite **/help build.***');
        }
    },

};
