const { SlashCommandBuilder, ReactionCollector } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const EmbedHelp = new EmbedBuilder()
            .setColor(0x8e2cb1)
            .setThumbnail('https://cdn.discordapp.com/attachments/994744837066731530/1003143693563351070/gegesgegesg.png')
            .addFields(
                { name: '**__Lista de comandos:__**', value: '\u200B'},
                { name: '**1・**build', value: `*Digite /help build para mais informações sobre o comando.*`, inline: true },
                { name: '**2・**help', value: `*Digite /help para mais informações sobre o comando.*`, inline: false },
            )
            .setFooter({ text: '@genshin_brasil' });

const EmbedAnemo = new EmbedBuilder()
            .setColor(0x8e2cb1)
            .setTitle('Nomes dos comandos:')
            .setThumbnail('https://cdn.discordapp.com/attachments/994744837066731530/1003143693563351070/gegesgegesg.png')
            .addFields(
                { name: '**Nome do personagem**', value: 'Comando', inline: false} ,
                { name: '\u200b', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>'},
                { name: 'Jean', value: 'Jean', inline: true},
                { name: 'Kaedehara Kazuha', value: `Kazuha`, inline: true },
                { name: 'Venti', value: `Venti`, inline: true },
                { name: 'Xiao', value: `Xiao`, inline: true },

                { name: "\u200b", value: `<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>` },

                { name: 'Sayu', value: 'Sayu', inline: true},
                { name: 'Shikanoin Heizou', value: `Heizou`, inline: true },
                { name: 'Sucrose', value: `Sucrose`, inline: true },
            )
            .setFooter({ text: '@genshin_brasil' , iconURL: 'https://genshin.honeyhunterworld.com/img/icons/element/anemo_35.png'});

const EmbedCryo = new EmbedBuilder()
            .setColor(0x8e2cb1)
            .setTitle('Nomes dos comandos:')
            .setThumbnail('https://cdn.discordapp.com/attachments/994744837066731530/1003143693563351070/gegesgegesg.png')
            .addFields(
                { name: '**Nome do personagem**', value: 'Comando', inline: false} ,
                { name: '\u200b', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>'},
                { name: 'Eula', value: 'Eula', inline: true},
                { name: 'Ganyu', value: `Ganyu`, inline: true },
                { name: 'Kamisato Ayaka', value: `Ayaka`, inline: true },
                { name: 'Qiqi', value: `Qiqi`, inline: true },
                { name: 'Shenhe', value: `Shenhe`, inline: true },
                { name: '\u200b', value: `\u200b`, inline: true },

                { name: "\u200b", value: `<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>` },

                { name: 'Chongyun', value: 'Chongyun', inline: true},
                { name: 'Diona', value: `Diona`, inline: true },
                { name: 'Rosaria', value: `Rosaria`, inline: true },
                { name: 'Kaeya', value: `Kaeya`, inline: true },
            )
            .setFooter({ text: '@genshin_brasil' , iconURL: 'https://genshin.honeyhunterworld.com/img/icons/element/cryo_35.png'});

const EmbedElectro = new EmbedBuilder()
            .setColor(0x8e2cb1)
            .setTitle('Nomes dos comandos:')
            .setThumbnail('https://cdn.discordapp.com/attachments/994744837066731530/1003143693563351070/gegesgegesg.png')
            .addFields(
                { name: '**Nome do personagem**', value: 'Comando', inline: false} ,
                { name: '\u200b', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>'},
                { name: 'Keqing', value: 'Keqing', inline: true},
                { name: 'Raiden Shogun', value: `Raiden Shogun`, inline: true },
                { name: 'Yae Miko', value: `Yae Miko`, inline: true },

                { name: "\u200b", value: `<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>` },

                { name: 'Beidou', value: 'Beidou', inline: true},
                { name: 'Fischl', value: `Fischl`, inline: true },
                { name: 'Kuki Shinobu', value: `Shinobu`, inline: true },
                { name: 'Lisa', value: `Lisa`, inline: true },
                { name: 'Razor', value: `Razor`, inline: true },
                { name: 'Kujou Sara', value: `Kujou Sara`, inline: true },
            )
            .setFooter({ text: '@genshin_brasil' , iconURL: 'https://genshin.honeyhunterworld.com/img/icons/element/electro_35.png'});

const EmbedGeo = new EmbedBuilder()
            .setColor(0x8e2cb1)
            .setTitle('Nomes dos comandos:')
            .setThumbnail('https://cdn.discordapp.com/attachments/994744837066731530/1003143693563351070/gegesgegesg.png')
            .addFields(
                { name: '**Nome do personagem**', value: 'Comando', inline: false} ,
                { name: '\u200b', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>'},
                { name: 'Albedo', value: 'Albedo', inline: true},
                { name: 'Arataki Itto', value: `Itto`, inline: true },
                { name: 'Zhongli', value: `Zhongli`, inline: true },

                { name: "\u200b", value: `<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>` },

                { name: 'Gorou', value: 'Gorou', inline: true},
                { name: 'Ningguang', value: `Ningguang`, inline: true },
                { name: 'Noelle', value: `Noelle`, inline: true },
                { name: 'Yunjin', value: `Yunjin`, inline: true },
            )
            .setFooter({ text: '@genshin_brasil' , iconURL: 'https://genshin.honeyhunterworld.com/img/icons/element/geo_35.png'});

const EmbedHydro = new EmbedBuilder()
            .setColor(0x8e2cb1)
            .setTitle('Nomes dos comandos:')
            .setThumbnail('https://cdn.discordapp.com/attachments/994744837066731530/1003143693563351070/gegesgegesg.png')
            .addFields(
                { name: '**Nome do personagem**', value: 'Comando', inline: false} ,
                { name: '\u200b', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>'},
                { name: 'Ast Mona', value: 'Mona', inline: true},
                { name: 'Kamisato Ayato', value: `Ayato`, inline: true },
                { name: 'Sangonomiya Kokomi', value: `Kokomi`, inline: true },
                { name: 'Tartaglia', value: `Tartaglia`, inline: true },
                { name: 'Yelan', value: `Yelan`, inline: true },
                { name: '\u200b', value: `\u200b`, inline: true },

                { name: "\u200b", value: `<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>` },

                { name: 'Barbara', value: 'Barbara', inline: true},
                { name: 'Xingqiu', value: `Xingqiu`, inline: true },
                { name: '\u200b', value: `\u200b`, inline: true },
            )
            .setFooter({ text: '@genshin_brasil' , iconURL: 'https://genshin.honeyhunterworld.com/img/icons/element/hydro_35.png'});

const EmbedPyro = new EmbedBuilder()
            .setColor(0x8e2cb1)
            .setTitle('Nomes dos comandos:')
            .setThumbnail('https://cdn.discordapp.com/attachments/994744837066731530/1003143693563351070/gegesgegesg.png')
            .addFields(
                { name: '**Nome do personagem**', value: 'Comando', inline: false} ,
                { name: '\u200b', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>'},
                { name: 'Diluc', value: 'Diluc', inline: true},
                { name: 'Hu Tao', value: `Hutao`, inline: true },
                { name: 'Klee', value: `Klee`, inline: true },
                { name: 'Yoimiya', value: `Yoimiya`, inline: true },
                { name: '\u200b', value: `\u200b`, inline: true },

                { name: "\u200b", value: `<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>` },

                { name: 'Amber', value: 'Amber', inline: true},
                { name: 'Bennett', value: `Bennett`, inline: true },
                { name: 'Thoma', value: `Thoma`, inline: true },
                { name: 'Xiangling', value: `Xiangling`, inline: true },
                { name: 'Xinyan', value: `Xinyan`, inline: true },
                { name: 'Yanfei', value: `Yanfei`, inline: true },
            )
            .setFooter({ text: '@genshin_brasil' , iconURL: 'https://genshin.honeyhunterworld.com/img/icons/element/pyro_35.png'});

const EmbedBuild = new EmbedBuilder()
            .setColor(0x8e2cb1)
            .setTitle('Comando de Builds:')
            .setDescription('A seguir você terá as opções do comando /build!\nPara seguir com o comando de ajuda, favor reagir no emoji ⏭️.\n\nAo iniciar o guia, reaja nos Elementos desejados.')
            .setThumbnail('https://cdn.discordapp.com/attachments/994744837066731530/1003143693563351070/gegesgegesg.png')
            .addFields(
                { name: '**Formato:**', value: '/build personagem', inline: true} ,
            )
            .setFooter({ text: '@genshin_brasil' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Envia a lista de comandos do bot!')
        .addStringOption(option =>
		option.setName('comando')
		.setDescription('Comando que desejas ajuda:')
		.setRequired(false)
                ),
        
        async execute(interaction) { 
            

            try {
            const help_command = interaction.options.get('comando').value;
            if (help_command === 'build') {    
                

                const message = await interaction.reply({ embeds: [EmbedBuild], fetchReply: true })
                
                const emojiAnemo   = message.guild.emojis.cache.find(emoji => emoji.name ==='0anemo');
                const emojiCryo    = message.guild.emojis.cache.find(emoji => emoji.name ==='0cryo');
                const emojiElectro = message.guild.emojis.cache.find(emoji => emoji.name ==='0electro');
                const emojiGeo     = message.guild.emojis.cache.find(emoji => emoji.name ==='0geo');
                const emojiHydro   = message.guild.emojis.cache.find(emoji => emoji.name ==='0hydro');
                const emojiPyro    = message.guild.emojis.cache.find(emoji => emoji.name ==='0pyro');

                message.react('⏭️')

                

                const filter = (reaction, user) => {
                    return reaction.emoji.name && user.id == interaction.user.id
                };

                const collector = message.createReactionCollector({filter, time: 60000});

                collector.on('collect', (reaction, user) => {
                    console.log(reaction.emoji.name, user.tag)

                    if (reaction.emoji.name === '⏭️') {
                        message.reactions.removeAll()
                        .then(() => message.edit({ embeds: [EmbedAnemo], fetchReply: true }))
                        .then(() => message.react(emojiAnemo))
                        .then(() => message.react(emojiCryo))
                        .then(() => message.react(emojiElectro))
                        .then(() => message.react(emojiGeo))
                        .then(() => message.react(emojiHydro))
                        .then(() => message.react(emojiPyro))
                    }

                    if (reaction.emoji.name === '0cryo') {
                        message.edit({ embeds: [EmbedCryo], fetchReply: true })
                    } else 
                    if (reaction.emoji.name === '0electro') {
                        message.edit({ embeds: [EmbedElectro], fetchReply: true })
                    } else 
                    if (reaction.emoji.name === '0geo') {
                        message.edit({ embeds: [EmbedGeo], fetchReply: true })
                    } else 
                    if (reaction.emoji.name === '0hydro') {
                        message.edit({ embeds: [EmbedHydro], fetchReply: true })
                    } else 
                    if (reaction.emoji.name === '0pyro') {
                        message.edit({ embeds: [EmbedPyro], fetchReply: true })
                    } else
                        message.edit({ embeds: [EmbedAnemo], fetchReply: true })
                });

               
                }
                
            } catch {
            await interaction.reply({ embeds: [EmbedHelp] });
            }
            
            
        }
}