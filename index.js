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

const ROLES = {
    vazamentos: '1001642578602643516',
    codigos: '1001642579034652703',
    avisos: '1001642578300645496',
    eventos: '1001642577294000218',
    servidor: '1001642576526450830'
}

const PRONOME = {
    ele: '1001639698818662411',
    ela: '1001639698277609483',
    elu: '1001639696826372176'
}

client.once('ready', () => {
    client.user.setActivity(`você digitar /help ! 💕`, { type: ActivityType.Watching });
    client.user.setStatus('online');
    // const channel = client.channels.cache.get('994744835183480988');
    // const EmbedCargos = new EmbedBuilder()
    //     .setColor(0x8e2cb1)
    //     .setTitle('Notificações')
    //     .setThumbnail('https://cdn.discordapp.com/attachments/994744837066731530/1003143693563351070/gegesgegesg.png')
    //     .addFields(
    //         { name: '**Selecione abaixo os cargos que você deseja receber atualizações sobre:**', value: ' \nCaso queira revogar o acesso a algum cargo, pressione novamente no botão.', inline: false },
    //         { name: '\u200b', value: '<@&1001642576526450830>\n<@&1001642579034652703>\n<@&1001642578300645496>\n<@&1001642577294000218>', inline: true },
    //     )
    //     .setFooter({ text: '@genshin_brasil' });
    // channel.send({
    //     embeds:
    //         [EmbedCargos],
    //     components: [
    //         new ActionRowBuilder().setComponents(
    //             new ButtonBuilder()
    //                 .setCustomId('servidor')
    //                 .setLabel('Servidor')
    //                 .setStyle(ButtonStyle.Primary)
    //                 .setEmoji('🛡️'),
    //             new ButtonBuilder()
    //                 .setCustomId('codigos')
    //                 .setLabel('Códigos')
    //                 .setStyle(ButtonStyle.Primary)
    //                 .setEmoji('🎁'),
    //             new ButtonBuilder()
    //                 .setCustomId('avisos')
    //                 .setLabel('Avisos')
    //                 .setStyle(ButtonStyle.Primary)
    //                 .setEmoji('📢'),
    //             new ButtonBuilder()
    //                 .setCustomId('eventos')
    //                 .setLabel('Eventos')
    //                 .setStyle(ButtonStyle.Primary)
    //                 .setEmoji('🎪'),


    //         )]
    // });
});

client.on('messageCreate', msg => {
    if (msg.content === '!servermap') {
        msg.channel.send('**Servidor oficial da Genshin Akademiya, acompanhe a melhor comunidade de Genshin Impact do Brasil e fique por dentro de avisos, eventos e tenha acesso antecipado aos diversos guias que fazemos!**\n\n<:xlupa:1002746774919856229>  Mapa do servidor:\n\n<:xmedalha:1002746809833230407>  Informações sobre o servidor:\nConverse com outros membros no: <#994744835862970433>\nDivulgue e promova conosco: <#996483570627530802>\nSiga-nos no Twitter: @genshin_brasil;');
        msg.channel.delete;
    }
});

client.on('messageCreate', msg => {
    if (msg.content === '!servermap2') {
        msg.channel.send('🍥 **Convide seus amigos:** https://discord.gg/akademiya');
    }
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

client.on('messageCreate', msg => {
    if (msg.content === '!pronome') {
        const row = new ActionRowBuilder()
            .setComponents(
                new SelectMenuBuilder()
                    .setCustomId('pronome')
                    .setPlaceholder('Selecione seu pronome:')
                    .setMinValues(0)
                    .setMaxValues(1)
                    .addOptions([
                        {
                            label: 'Ele/Dele',
                            value: 'ele',
                        },
                        {
                            label: 'Ela/Dela',
                            value: 'ela',
                        },
                        {
                            label: 'Elu/Delu',
                            value: 'elu',
                        },
                    ]),
            );

        msg.channel.send({ embeds: [EmbedPronome], components: [row] });;


    }
});

client.on('messageCreate', msg => {
    if (msg.content === '!cores') {
        msg.channel.send('Para pegar uma cor para o seu nickname, Redirecione-se para o chat: <#1001844275753005066>')
    }
})

client.on('messageCreate', msg => {
    if (msg.content === '!dev') {
        
    }
})


client.on('guildMemberRemove', async member => {
    const membros = member.guild.memberCount;
    client.user.setActivity(`${membros} membros na Akademiya!`, { type: ActivityType.Watching })

})

client.on('guildMemberAdd', async member => {
    const membros = member.guild.memberCount;

    const EmbedWelcome = new EmbedBuilder()
        .setColor(0x8e2cb1)
        .setTitle(`Olá ${member.user.username}! Seja bem vindo(a/e) à Genshin Akademiya!`)
        .setThumbnail(`https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png`)
        .setAuthor({ name: `${member.user.tag}`, iconURL: `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png` })
        .addFields(
            { name: '\u200B', value: `**➭ Leia as nossas regras: <#994744835183480987>**\n**➭ Pegue alguns cargos: <#994744835183480988>**\n**➭ Converse no chat: <#994744835862970433>**\n**➭ Use o nosso Bot: <#994964287942561813>**` })
        .setFooter({ text: `Membro nº: ${member.guild.memberCount}` });
    console.log("Novo membro: ", member);
    member.guild.channels.cache.get("994744835183480986").send({ content: `${member.user}`, embeds: [EmbedWelcome] }).then(
        client.user.setActivity(`${membros} membros na Akademiya!`, { type: ActivityType.Watching })
    );
});

const EmbedRegras = new EmbedBuilder()
    .setColor(0x8e2cb1)
    .setDescription('**__Regras do Servidor:__**')
    .addFields(
        { name: '\u200B', value: `**1 **・ Não venda/troque contas dentro do servidor.\n\n**2 **・ Trate todos do servidor com respeito, respeito é bom e importante pra convivência dentro do servidor.\n\n**3** ・ Sem conteúdo NSFW nos chat's do servidor.\n\n**4** ・ Palavrões são permitidos mas de forma moderada.\n\n**5 **・ Não mencione/spamme pings na nossa staff sem necessidade.\n\n**6 **・ É inaceitável atacar indivíduos ou comunidades com base em atributos como raça, etnia, casta, nacionalidade, gênero, identidade de gênero, orientação sexual, religião, idade, doença, deficiência ou outra classificaçãol.`, inline: true },
        { name: '\u200B', value: "**7**・ Não divulgue outros servidores aqui e nem no privado dos outros membros do servidor.\n\n**8**・É proibido flood/spam, como também é proibido incentivá-lo. (Considerado a partir de 5 linhas)\n\n**9 **・Spoilers podem ser enviados nos chats do servidor, porém devem ser enviados no formato de: mensagem spoiler (se não souber como fazer, pergunte no chat como enviar neste formato).\n\n**10 **・Tenha bom senso, qualquer atitude que fuja disso e incomode a conduta do servidor e da nossa equipe, será simplesmente punida.\n\n**Fique atento também às Diretrizes da Comunidade e do Discord:**\n✧ __https://discordapp.com/terms__\n✧ __https://discordapp.com/guidelines__\n\n*Aproveitem o servidor!*" }
    )
    .setFooter({ text: '@genshin_brasil' });

client.on('messageCreate', msg => {
    if (msg.content === '!regras') {
        msg.channel.send({ embeds: [EmbedRegras] });
    }
});





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

client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
        console.log(interaction)
        const role = interaction.guild.roles.cache.get(
            ROLES[interaction.customId]);

        const hasRole = interaction.member.roles.cache.has(role.id);

        if (hasRole) {
            interaction.member.roles
                .remove(role)
                .then(
                    console.log(interaction),
                    interaction.reply({ content: `O cargo ${role} foi removido com sucesso!`, ephemeral: true }))

        } else {
            interaction.member.roles
                .add(role)
                .then(
                    interaction.reply({ content: `O cargo ${role} foi adicionado com sucesso!`, ephemeral: true }));
        }
    }
})

client.on('interactionCreate', async interaction => {
    if (interaction.isSelectMenu()) {
        console.log(interaction.values)

        if (interaction.customId === 'pronome') {

            const role = interaction.guild.roles.cache.get(
                PRONOME[interaction.values]);

            if (role === undefined) {
                interaction.member.roles
                    .remove(PRONOME.ela)
                    .then(
                        interaction.member.roles.remove(PRONOME.ele))
                    .then(
                        interaction.member.roles.remove(PRONOME.elu))
                    .then(
                        interaction.reply({ content: `Todos os pronomes foram removidos com sucesso!`, ephemeral: true }));
            } else {
                const hasRole = interaction.member.roles.cache.has(role.id);
                if (hasRole) {
                    interaction.member.roles
                        .remove(role)
                        .then(
                            interaction.reply({ content: `O pronome ${role} foi removido com sucesso!`, ephemeral: true }));

                } else {

                    interaction.member.roles
                        .add(role)
                        .then(
                            interaction.reply({ content: `O pronome ${role} foi adicionado com sucesso!`, ephemeral: true }));
                }
            }
        }
    }
})



client.login(process.env.TOKEN);