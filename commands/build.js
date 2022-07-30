const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const EmbedXiao = new EmbedBuilder()
            .setColor(0x002529)
        .setAuthor({ name: 'Xiao ✦ Main DPS Build' })
        .setDescription('*Xiao (chinês: 魈 Xiāo, "Demônio"), Nome de Yaksha Alatus, é um adeptus e o único membro restante dos Cinco Yakshas enviados por Morax para subjugar os espíritos demoníacos que atormentavam Liyue. Ele atualmente mora no Albergue Wangshu, onde se isola das multidões e de interações humanas.*')
        .setThumbnail('https://genshin.honeyhunterworld.com/img/char/xiao.png')
        .addFields(
           { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
           { name: 'Elemento', value: 'Anemo', inline: true },
        )
        .addFields({ name: 'Arma', value: 'Lança', inline: true })
        .setImage('https://i.imgur.com/r1qt2YY.jpg')
        .setTimestamp()
        .setFooter({ text: '@genshin_brasil', });

const EmbedJean = new EmbedBuilder()
            .setColor(0x002d32)
            .setAuthor({ name: 'Jean ✦ Burst DPS Build' })
            .setDescription('*Descendente do prestigioso Clã Gunnhildr, Jean é a Grande Mestre Intendente em exercício dos Cavaleiros de Favonius. Ela está sempre ocupada lidando com distúrbios em Mondstadt e, claro, trabalhando incansavelmente para manter a Cidade da Liberdade.*')
            .setThumbnail('https://genshin.honeyhunterworld.com/img/char/jean.png')
            .addFields(
                { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
                { name: 'Elemento', value: 'Anemo', inline: true },
            )
            .addFields({ name: 'Arma', value: 'Espada', inline: true })
            .setImage('https://i.imgur.com/VK9DzPx.jpg')
            .setTimestamp()
            .setFooter({ text: '@genshin_brasil', });

const EmbedKazuha = new EmbedBuilder()
        .setColor(0x0c2d29)
        .setAuthor({ name: 'Kaedehara Kazuha ✦ EM Support Build' })
        .setDescription('*Um samurai errante do outrora famoso Clã Kaedehara, Kazuha é um membro da tripulação da Frota Crux, acolhido por Beidou depois de ser declarado um criminoso por Baal por tirar uma visão de suas mãos.*')
        .setThumbnail('https://genshin.honeyhunterworld.com/img/char/kazuha.png')
        .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Anemo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espada', inline: true })
    .setImage('https://i.imgur.com/ikrrXQg.png')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil' });

const EmbedSayu = new EmbedBuilder()
    .setColor(0x512c1a)
    .setAuthor({ name: 'Sayu ✦ Sustain Build' })
    .setDescription('*Uma ninja do Shiyuumatsu-Ban que está lutando para crescer. Sayu acredita que dormir pode ajudá-la a crescer, e é por isso que ela prefere usar suas técnicas ninja para se esconder e dormir.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/sayu.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Anemo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espadão', inline: true })
    .setImage('https://i.imgur.com/E9nyULv.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedHeizou = new EmbedBuilder()
    .setColor(0x2b1714)
    .setAuthor({ name: 'Shikanoin Heizou ✦ DPS Build' })
    .setDescription('*Heizou é um detetive de Inazuma que trabalha para a Comissão Tenryou.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/heizo.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Anemo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Catalisador', inline: true })
    .setImage('https://i.imgur.com/5ODAKMT.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedVenti = new EmbedBuilder()
    .setColor(0x002525)
    .setAuthor({ name: 'Venti ✦ Crowd Control Build' })
    .setDescription('*Venti é um bardo amante do vinho e de espírito livre em Mondstadt e o atual corpo mortal de Barbatos, o Arconte Anemo.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/venti.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Anemo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/N607elM.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedSucrose = new EmbedBuilder()
    .setColor(0x002e34)
    .setAuthor({ name: 'Sucrose ✦ EM Support Build' })
    .setDescription('*Uma alquimista especializada em bioalquimia, ela também atua como assistente de Albedo, o alquimista chefe dos Cavaleiros de Favonius.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/sucrose.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Anemo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Catalisador', inline: true })
    .setImage('https://i.imgur.com/eL6q5e9.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

    //cryo

const EmbedAloy = new EmbedBuilder()
    .setColor(0x342013)
    .setAuthor({ name: 'Aloy ✦ Burst DPS Build' })
    .setDescription('*Pária, caçadora de máquinas, procuradora, ungida, salvadora... Aloy tinha muitas identidades em seu mundo original e estava destinada, por causa de sua genética, a ser a heroína que iria curá-lo.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/aloy.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Cryo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/5KLO8fR.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedAyaka = new EmbedBuilder()
    .setColor(0x002b50)
    .setAuthor({ name: 'Kamisato Ayaka ✦ DPS Build' })
    .setDescription('*Ela é a filha mais velha do Clã Kamisato e irmã de Kamisato Ayato. Por ser educada, elegante e graciosa, as pessoas comuns não têm nada a dizer mal de Ayaka. Por causa de seu status social como a filha mais velha do Clã Kamisato da Comissão Yashiro e como Shirasagi Himegimi, Ayaka é vista como um modelo de perfeição.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/ayaka.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Cryo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espada', inline: true })
    .setImage('https://i.imgur.com/l8QqnUm.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedEula = new EmbedBuilder()
    .setColor(0x051e30)
    .setAuthor({ name: 'Eula ✦ DPS Build' })
    .setDescription('*Capitã de Reconhecimento dos Cavaleiros de Favonius, conhecida como Cavaleira das Ondas. Eula vem de uma linhagem aristocrática e é descendente do infame e tirânico Clã Lawrence que foi destituída pelos Cavaleiros de Favonius, ainda assim ela se junta aos Cavaleiros por motivos desconhecidos.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/eula.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Cryo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espadão', inline: true })
    .setImage('https://i.imgur.com/2Obt8ah.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedQiqi = new EmbedBuilder()
    .setColor(0x002241)
    .setAuthor({ name: 'Qiqi ✦ Sustain Build' })
    .setDescription('*Ressuscitada como um zumbi pelos adepti, ela acabou aos cuidados de Baizhu e agora trabalha no Chalé de Bubu no Porto de Liyue.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/qiqi.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Cryo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espada', inline: true })
    .setImage('https://i.imgur.com/PaeHipv.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedShenhe = new EmbedBuilder()
    .setColor(0x052f4d)
    .setAuthor({ name: 'Shenhe ✦ Support Build' })
    .setDescription('*Uma discípula adepti com um ar muito incomum sobre ela. Tendo passado muito tempo vivendo em isolamento nas montanhas de Liyue, ela se tornou tão fria e distante quanto os próprios adepti.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/shenhe.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Cryo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Lança', inline: true })
    .setImage('https://i.imgur.com/FuUtVWb.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedChongyun = new EmbedBuilder()
    .setColor(0x004570)
    .setAuthor({ name: 'Chongyun ✦ Burst DPS Build' })
    .setDescription('*Exorcista de Liyue , Chongyun nasceu com uma energia positiva excessiva, o que provou ser uma ajuda e um obstáculo. Isso o torna um exorcista muito eficaz, mas também significa que ele nunca viu um espírito para si mesmo - eles fogem antes mesmo que ele possa colocar os olhos neles. Também o tornou particularmente suscetível a qualquer tipo de calor ou emoção forte, o que leva a alguns ... resultados inesperados.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/chongyun.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Cryo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espadão', inline: true })
    .setImage('https://i.imgur.com/lWS040K.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });
   
const EmbedDiona = new EmbedBuilder()
    .setColor(0x582433)
    .setAuthor({ name: 'Diona ✦ Sustain Build' })
    .setDescription('*Apesar de ser uma bartender em A Cauda do Gato, ela realmente despreza o álcool e não quer nada mais do que arruinar a indústria do vinho de Mondstadt - uma façanha mais fácil de dizer do que fazer já que seus clientes simplesmente amam suas bebidas.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/diona.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Cryo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/ZzHrFH4.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedRosaria = new EmbedBuilder()
    .setColor(0x3c161d)
    .setAuthor({ name: 'Rosaria ✦ Burst DPS Build' })
    .setDescription('*Uma freira que, além das suas vestes, não se parece em nada com uma pessoa do clero. Conhecida por seus modos e palavras diretos e frios, ela costuma trabalhar sozinha.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/rosaria.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Cryo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Lança', inline: true })
    .setImage('https://i.imgur.com/nJzFegS.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedKaeya = new EmbedBuilder()
    .setColor(0x072e49)
    .setAuthor({ name: 'Kaeya ✦ Sub DPS Build' })
    .setDescription('*Kaeya é um Capitão de Cavalaria dos Cavaleiros de Favonius. Ele é muito estimado pelo povo de Mondstadt - mesmo com todas as suas excentricidades e segredos.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/kaeya.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Cryo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espada', inline: true })
    .setImage('https://i.imgur.com/Y3DCzeq.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedGanyuF = new EmbedBuilder()
    .setColor(0x002b4e)
    .setAuthor({ name: 'Ganyu ✦ Freeze Main DPS Build' })
    .setDescription('*Secretária do Pavilhão Yuehai. O sangue da besta iluminada Qilin flui nas suas veias.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/ganyu.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Cryo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/Shi0siE.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

    const EmbedGanyuM = new EmbedBuilder()
    .setColor(0x002b4e)
    .setAuthor({ name: 'Ganyu ✦ Freeze Main DPS Build' })
    .setDescription('*Secretária do Pavilhão Yuehai. O sangue da besta iluminada Qilin flui nas suas veias.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/ganyu.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620><:5Star:954093937109401620>', inline: true },
        { name: 'Elemento', value: 'Cryo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/Shi0siE.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });




    const gfreeze = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('ganyu1')
            .setLabel('Ganyu Freeze')
            .setStyle(ButtonStyle.Primary),
    );
    const gmelt = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('ganyu2')
            .setLabel('Ganyu Melt')
            .setStyle(ButtonStyle.Primary),
    );

module.exports = {
    data: new SlashCommandBuilder()
        .setName('build')
        .setDescription('Envia um guia sobre o personagem selecionado!')
        .addStringOption(option =>
		option.setName('personagem')
		.setDescription('Guia do Personagem:')
		.setRequired(true)
		.addChoices(
            //anemo

            { name: 'Jean', value: 'jean' },
            { name: 'Kaedehara Kazuha', value: 'kazuha' },
            { name: 'Venti', value: 'venti' },
			{ name: 'Xiao', value: 'xiao' },		
            { name: 'Sayu', value: 'sayu' },    	
			{ name: 'Shikanoin Heizou', value: 'heizou' },                        
            { name: 'Sucrose', value: 'sucrose' },
            //cryo

            { name: 'Aloy', value: 'aloy' },
			{ name: 'Eula', value: 'eula' },
			{ name: 'Ganyu', value: 'ganyu' },
            { name: 'Kamisato Ayaka', value: 'ayaka' },
            { name: 'Qiqi', value: 'qiqi' },
            { name: 'Shenhe', value: 'shenhe' },
            { name: 'Chongyun', value: 'chongyun' },
            { name: 'Diona', value: 'diona' },
            { name: 'Kaeya', value: 'kaeya' },
            { name: 'Rosaria', value: 'rosaria' },
		)),
        async execute(interaction) {
            const build = interaction.options.get('personagem').value;
            //anemo

            if (build === 'xiao') {    
                await interaction.reply({ embeds: [EmbedXiao] });
            } else if (build === 'jean') {
                await interaction.reply({ embeds: [EmbedJean] });
            } else if (build === 'heizou') {
                await interaction.reply({ embeds: [EmbedHeizou] });
            } else if (build === 'kazuha') {
                await interaction.reply({ embeds: [EmbedKazuha] });
            } else if (build === 'sayu') {
                await interaction.reply({ embeds: [EmbedSayu] });
            } else if (build === 'venti') {
                await interaction.reply({ embeds: [EmbedVenti] });
            } else if (build === 'sucrose') {
                await interaction.reply({ embeds: [EmbedSucrose] });
            } 
            //cryo

            else if (build === 'aloy') {
                await interaction.reply({ embeds: [EmbedAloy] });
            } else if (build === 'eula') {
                await interaction.reply({ embeds: [EmbedEula] });
            } else if (build === 'ganyu') {
                await interaction.reply({ embeds: [EmbedGanyuF], components: [gfreeze, gmelt] });
            } else if (build === 'ayaka') {
                await interaction.reply({ embeds: [EmbedAyaka] });
                
            } else if (build === 'qiqi') {
                await interaction.reply({ embeds: [EmbedQiqi] });
            } else if (build === 'shenhe') {
                await interaction.reply({ embeds: [EmbedShenhe] });
            } else if (build === 'chongyun') {
                await interaction.reply({ embeds: [EmbedChongyun] });
            } else if (build === 'diona') {
                await interaction.reply({ embeds: [EmbedDiona] });
            } else if (build === 'kaeya') {
                await interaction.reply({ embeds: [EmbedKaeya] });
            } else if (build === 'rosaria') {
                await interaction.reply({ embeds: [EmbedRosaria] });
            } 
        },
};
