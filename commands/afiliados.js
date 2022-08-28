const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const EmbedAfiliados = new EmbedBuilder()
    .setColor(0x8e2cb1)
    .setThumbnail('https://cdn.discordapp.com/attachments/994744837066731530/1003143693563351070/gegesgegesg.png')
    .addFields(
        { name: '**__Lista de afiliados:__**', value: '\u200B' },
        { name: '**1・**YouTuber:', value: `*<@264094088842838016>*\n*<@191952730426834944>*`, inline: true },
        { name: '**2・**Twitter:', value: `*<@734581184947814401>\n<@698690754205319218>\n<@586997954339012618>\n<@749387304728264744>*`, inline: true },
        { name: '**3・**Guias', value: `*<@260565446929940481>*\n*<@715937384067366972>*`, inline: true },
        { name: '**4・**Streamer', value: `*<@212376413393649674>*\n*<@749387304728264744>*\n*<@296538559027085312>*\n*<@849811106674245653>\n<@334487414536142848>\n<@601541120232521738>*\n*<@398257297878548501>*`, inline: true },
        { name: '**5・**TikToker', value: `*<none>*`, inline: true },
        { name: '**6・**Instagram', value: `*<none>*`, inline: true },
        { name: '**7・**Cosplayer', value: `*<@334487414536142848>*`, inline: true },
        { name: '\u200b', value: `\u200b`, inline: true },
    )
    .setFooter({ text: '@genshin_brasil' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('afiliados')
        .setDescription('Envia a lista de Afiliados do Servidor!'),

    async execute(interaction) {
        await interaction.reply({ embeds: [EmbedAfiliados] })
    }

}