const { SlashCommandBuilder, Message } = require('discord.js');
let Embeds = require('../database/builds.js');
const { client } = require('../index.js')



module.exports = {
    data: new SlashCommandBuilder()
        .setName('dev')
        .setDescription('Envia um guia sobre o personagem selecionado!')
        .addStringOption(option =>
            option.setName('personagem')
                .setDescription('Guia do Personagem:')
                .setRequired(false)
        ),
    async execute(interaction) {

        const ver = interaction.member.roles.cache.has('1003009674968313866');
        if (ver) {
            try {
                const buildget = interaction.options.get('personagem').value;
                const build = buildget.toLocaleLowerCase();
                const char = Embeds[build]

                if (build === 'mona') {
                    const message = await interaction.reply({ embeds: [char], fetchReply: true });
                    message.react('⬅️')
                    message.react('➡️')
                    const filter = (reaction, user) => {
                        return reaction.emoji.name && user.id == interaction.user.id
                    };

                    const collector = message.createReactionCollector({ filter, time: 60000 });

                    collector.on('collect', (reaction, user) => {
                        console.log(reaction.emoji.name, user.tag)
                        if (reaction.emoji.name === '➡️') {
                            const mona2 = 'mona2'
                            const char2 = Embeds[mona2]
                            message.edit({ embeds: [char2], fetchReply: true })
                        } else {
                            message.edit({ embeds: [char], fetchReply: true })
                        }
                    });
                } else
                    if (build === 'ganyu') {
                        const message = await interaction.reply({ embeds: [char], fetchReply: true });
                        message.react('⬅️')
                        message.react('➡️')
                        const filter = (reaction, user) => {
                            return reaction.emoji.name && user.id == interaction.user.id
                        };

                        const collector = message.createReactionCollector({ filter, time: 60000 });

                        collector.on('collect', (reaction, user) => {
                            console.log(reaction.emoji.name, user.tag)
                            if (reaction.emoji.name === '➡️') {
                                const ganyu2 = 'ganyu2'
                                const char2 = Embeds[ganyu2]
                                message.edit({ embeds: [char2], fetchReply: true })
                            } else {
                                message.edit({ embeds: [char], fetchReply: true })
                            }
                        });
                    } else
                        if (build === 'amber') {
                            const message = await interaction.reply({ embeds: [char], fetchReply: true });
                            message.react('⬅️')
                            message.react('➡️')
                            const filter = (reaction, user) => {
                                return reaction.emoji.name && user.id == interaction.user.id
                            };

                            const collector = message.createReactionCollector({ filter, time: 60000 });

                            collector.on('collect', (reaction, user) => {
                                console.log(reaction.emoji.name, user.tag)
                                if (reaction.emoji.name === '➡️') {
                                    const amber2 = 'amber2'
                                    const char2 = Embeds[amber2]
                                    message.edit({ embeds: [char2], fetchReply: true })
                                } else {
                                    message.edit({ embeds: [char], fetchReply: true })
                                }
                            });
                        } else {
                            await interaction.reply({ embeds: [char] });
                        }

            } catch {
                await interaction.reply('**・Comando utilizado de maneira errônea!**\n┗ *Para mais detalhes, digite **/help build.***');
            }
        } else {
            interaction.reply({ content: `Sem permissões mínimas! Você precisa ter o cargo <@&1005255209334865950> para executar esse comando.`, ephemeral: true });

        }
    }
}