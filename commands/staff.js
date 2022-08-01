const { SlashCommandBuilder, ReactionCollector } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const EmbedStaff = new EmbedBuilder()
            .setColor(0x8e2cb1)
            .setThumbnail('https://cdn.discordapp.com/attachments/994744837066731530/1003143693563351070/gegesgegesg.png')
            .addFields(
                { name: '**__Lista de staff:__**', value: '\u200B'},
                { name: '**1・**CEO', value: `*<@979504840520630282>*`, inline: true },
                { name: '**2・**Owner', value: `*<@407649282200436738>*`, inline: true },
                { name: '**3・**Coder', value: `*<@980810654225158174>*\n*<@407649282200436738>*`, inline: true },
                { name: '**4・**Admin', value: `*<none>*`, inline: true },
                { name: '**5・**Moderator', value: `*<none>*`, inline: true },
                { name: '\u200b', value: `\u200b`, inline: true },
                { name: '**6・**Designer', value: `*<@407649282200436738>*\n*<@715937384067366972>*\n*<@979504840520630282>*`, inline: true },
                { name: '**7・**Leaker', value: `*<@407649282200436738>*\n*<@586997954339012618>*\n*<@260565446929940481>*\n*<@698690754205319218>*`, inline: true },
                { name: '\u200b', value: `\u200b`, inline: true },
            )
            .setFooter({ text: '@genshin_brasil' });

            module.exports = {
                data: new SlashCommandBuilder()
                    .setName('staff')
                    .setDescription('Envia a lista de staffers do Servidor!'),

                async execute(interaction) { 
                    await interaction.reply({ embeds: [EmbedStaff] })
                }

            }

    