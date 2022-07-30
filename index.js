const Discord = require('discord.js');
const dotenv = require('dotenv');
const { EmbedBuilder } = require('discord.js');
const { ActivityType } = require('discord.js');
const { Collection } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { waitForDebugger } = require('node:inspector');

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

const prefix = "!"

client.once('ready', () => {
    client.user.setActivity('você digitar /build !', { type: ActivityType.Watching });
    client.user.setStatus('online');
	console.log('Ready!');
});

client.on('messageCreate', msg => {
    if (msg.content === '!servermap') {
        msg.channel.send('**Servidor oficial da @genshin_brasil, acompanhe a melhor comunidade de Genshin Impact do Brasil e fique por dentro de vazamentos, avisos, eventos e tenha acesso antecipado aos diversos guias que fazemos!**\n\n<:xlupa:1002746774919856229>  Mapa do servidor:\n\n<:xmedalha:1002746809833230407>  Informações sobre o servidor:\nConverse com pessoas no: <#994744835862970433>\nDivulgue e promova conosco: <#996483570627530802>\nSiga-nos no Instagram e Twitter: @genshin_brasil;');
        msg.channel.delete;
    }
});

client.on('messageCreate', msg => {
    if (msg.content === '!servermap2') {
        msg.channel.send('🍥 **Convide seus amigos:** https://discord.gg/FgFW4sXmhq');
    }
});

const EmbedRegras = new EmbedBuilder()
            .setColor(0x8e2cb1)
            .setDescription('**__Regras do Servidor:__**')
            .addFields(
                { name: '\u200B', value: `**1 **・ Não venda/troque contas dentro do servidor.\n\n**2 **・ Trate todos do servidor com respeito, respeito é bom e importante pra convivência dentro do servidor.\n\n**3** ・ Sem conteúdo NSFW nos chat's do servidor.\n\n**4** ・ Palavrões são permitidos mas de forma moderada.\n\n**5 **・ Não mencione/spamme pings na nossa staff sem necessidade.\n\n**6**・ Não divulgue outros servidores aqui e nem no privado dos outros membros do servidor.\n\n**7**・É proibido flood/spam, como também é proibido incentivá-lo. (Considerado a partir de 5 linhas)\n\n**8 **・Spoilers podem ser enviados nos chats do servidor, porém devem ser enviados no formato de: mensagem spoiler (se não souber como fazer, pergunte no chat como enviar neste formato).\n\n**9 **・Tenha bom senso, qualquer atitude que fuja disso e incomode a conduta do servidor e da nossa equipe, será simplesmente punida.\n\n**Fique atento também às Diretrizes da Comunidade e do Discord:**\n✧ __https://discordapp.com/terms__\n✧ __https://discordapp.com/guidelines__\n\n*Aproveitem o servidor!*`, inline: true },
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

client.login('MTAwMTYzMzM5MzA3MjY4NTEyOA.GPe5hU.H662mITtUr7IrdpatDvUeADSjekAje-qEWvT4Y')