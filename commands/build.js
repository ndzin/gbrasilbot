const { SlashCommandBuilder, Message } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

const EmbedXiao = new EmbedBuilder()
            .setColor(0x002529)
        .setAuthor({ name: 'Xiao ✦ Main DPS Build' })
        .setDescription('*Xiao (chinês: 魈 Xiāo, "Demônio"), Nome de Yaksha Alatus, é um adeptus e o único membro restante dos Cinco Yakshas enviados por Morax para subjugar os espíritos demoníacos que atormentavam Liyue. Ele atualmente mora no Albergue Wangshu, onde se isola das multidões e de interações humanas.*')
        .setThumbnail('https://genshin.honeyhunterworld.com/img/char/xiao.png')
        .addFields(
           { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
                { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
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
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Cryo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/Shi0siE.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedGanyuM = new EmbedBuilder()
    .setColor(0x002b4e)
    .setAuthor({ name: 'Ganyu ✦ Melt Main DPS Build' })
    .setDescription('*Secretária do Pavilhão Yuehai. O sangue da besta iluminada Qilin flui nas suas veias.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/ganyu.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Cryo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/1HARJft.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

//electro

const EmbedKeqing = new EmbedBuilder()
    .setColor(0x201646)
    .setAuthor({ name: 'Keqing ✦ DPS Build' })
    .setDescription('*Keqing é a Yuheng do Qixing de Liyue. Ela é alguém que procura suas próprias respostas ao invés de deixar o caos acontecer em Liyue. Keqing escolhe seu próprio caminho com seu próprio poder e habilidade, ao invés de deixar os Deuses escolherem seu caminho.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/keqing.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Electro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espada', inline: true })
    .setImage('https://i.imgur.com/MEwqcxw.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedShogun = new EmbedBuilder()
    .setColor(0x32215b)
    .setAuthor({ name: 'Raiden Shogun ✦ Battery Build' })
    .setDescription('*Sua Excelência, a Toda Poderosa Narukami Ogosho, que prometeu ao povo de Inazuma uma Eternidade imutável.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/shougun.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Electro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Lança', inline: true })
    .setImage('https://i.imgur.com/tC7jLyv.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedYaeMiko = new EmbedBuilder()
    .setColor(0x4e2638)
    .setAuthor({ name: 'Yae Miko ✦ Main DPS Build' })
    .setDescription('*A Sacerdotisa do Grande Santuário Narukami, descendente da linhagem Kitsune, amiga próxima da "Enternidade" e a editora-chefe intimidadora da Editora Yae, uma editora de Romances Literários.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/yaemiko.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Electro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Catalisador', inline: true })
    .setImage('https://i.imgur.com/0lvi7ZC.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedBeidou = new EmbedBuilder()
    .setColor(0x2d1c4e)
    .setAuthor({ name: 'Beidou ✦ Main DPS Build' })
    .setDescription('*Ela é a capitã da Frota Crux . Além de suas capacidades como capitã de frota e sua força imensa, muitos em Liyue a conhecem por sua falta de medo em relação ao Tianquan dos Qixing, Ningguang - uma característica que a outra mulher aprecia, mas fica irritada.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/beidou.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Electro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espadão', inline: true })
    .setImage('https://i.imgur.com/Zkuwbji.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedFischl = new EmbedBuilder()
    .setColor(0x28153d)
    .setAuthor({ name: 'Fischl ✦ Sub DPS Build' })
    .setDescription('*Uma mulher misteriosa que se auto-intitula de "Prinzessin der Verurteilung" e viaja com um corvo chamado de Oz.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/fischl.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Electro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/sttRqG6.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedShinobu = new EmbedBuilder()
    .setColor(0x150421)
    .setAuthor({ name: 'Kuki Shinobu ✦ Sustain Build' })
    .setDescription('*Vice-líder da Gangue Arataki. Usa uma máscara de estilo único com expressões bastante sérias. São poucas as pessoas que sabem o motivo pela qual um talento desse calibre fugiria para se juntar a uma gangue de rua, e menos ainda são as pessoas que conhecem o que ela esconde sob sua máscara.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/shinobu.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Electro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espada', inline: true })
    .setImage('https://i.imgur.com/ozhkDex.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedLisa = new EmbedBuilder()
    .setColor(0x39224c)
    .setAuthor({ name: 'Lisa ✦ Enabler Build' })
    .setDescription('*Ela é uma bruxa intelectual que adora dormir. Como administradora da Biblioteca de Ordo Favonius, Lisa sempre consegue encontrar a maneira mais eficaz para resolver todos os problemas. Apesar de parecer preguiçosa, não teme nada e mantém tudo sob controle.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/lisa.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Electro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Catalisador', inline: true })
    .setImage('https://i.imgur.com/5EaoXHV.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedRazor = new EmbedBuilder()
    .setColor(0x211035)
    .setAuthor({ name: 'Razor ✦ DPS Build' })
    .setDescription('*Abandonado quando criança, Razor foi acolhido pelo Lobo do Norte, Andrius, e criado por sua matilha de lobos no Reino dos Lobos. Após um encontro casual com Varka, o atual Grande Mestre dos Cavaleiros de Favonius e Cavaleiro de Boreas, ele começou a se integrar aos humanos novamente.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/razor.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Electro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espadão', inline: true })
    .setImage('https://i.imgur.com/aZqPSoX.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedSara = new EmbedBuilder()
    .setColor(0x16091e)
    .setAuthor({ name: 'Kujou Sara ✦ Burst DPS Build' })
    .setDescription('*General da Comissão Tenryou. Ela é uma garota atraente, com uma personalidade muitas vezes comparada com o vento, e que nunca volta atrás das próprias palavras.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/sara.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Electro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/T6jCBdD.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

//geo

const EmbedAlbedo = new EmbedBuilder()
    .setColor(0x2f2930)
    .setAuthor({ name: 'Albedo ✦ Sub DPS Build' })
    .setDescription('*O misterioso Albedo é o Chefe Alquimista e Capitão da Equipe de Investigação dos Cavaleiros de Favonius, com Sucrose como sua assistente. Ele tem um desejo infinito de aprender sobre o mundo de Teyvat, estudando cuidadosamente todos os objetos ao seu redor.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/albedo.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Geo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espada', inline: true })
    .setImage('https://i.imgur.com/qI3ojxz.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedItto = new EmbedBuilder()
    .setColor(0x251714)
    .setAuthor({ name: 'Arataki Itto ✦ Main DPS Build' })
    .setDescription('*Arataki Itto é conhecido por sua rivalidade unilateral com Kujou Sara depois que ela o derrotou e tomou sua Visão. Um descendente do oni carmesim, Itto também é o líder e fundador da Gangue Arataki.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/itto.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Geo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espadão', inline: true })
    .setImage('https://i.imgur.com/iNAHixS.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedZhongli = new EmbedBuilder()
    .setColor(0x241c17)
    .setAuthor({ name: 'Zhongli ✦ Sustain Build' })
    .setDescription('*Um consultor misterioso da Funerária de Wangsheng, que possui uma aparência bonita, um comportamento bem-educado e a sabedoria além do alcance de qualquer pessoa. Mesmo que não se sabe de onde ele vem, ele conhece tão bem as regras locais. Como o consultor da Funerária de Wangsheng, ele pode executar todos os tipos de Rituais*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/zhongli.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Geo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Lança', inline: true })
    .setImage('https://i.imgur.com/aJzf2Ry.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedGorou = new EmbedBuilder()
    .setColor(0x683106)
    .setAuthor({ name: 'Gorou ✦ Enabler Build' })
    .setDescription('*General de Watatsumi, ganhou respeito e prestígio por possuir a majestade de um líder, mas que permanece humilde. Confiado por todos os subordinados, ele é um companheiro com quem você pode abrir seu coração sem se preocupar com nada.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/gorou.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Geo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/Kl5J0wf.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedNingguang = new EmbedBuilder()
    .setColor(0x281804)
    .setAuthor({ name: 'Ningguang ✦ Main DPS Build' })
    .setDescription('*Ningguang é o Tianquan dos Qixing de Liyue. Ela detém uma posição de riqueza além de muitas outras em Teyvat. A posição e as habilidades de Ningguang permitiram que ela construísse sua maior conquista, a flutuante Câmara de Jade que zela por toda Liyue.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/ningguang.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Geo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Catalisador', inline: true })
    .setImage('https://i.imgur.com/EhqKfVj.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedYunjin = new EmbedBuilder()
    .setColor(0x261d3b)
    .setAuthor({ name: 'Yunjin ✦ Enabler Build' })
    .setDescription('*Yunjin é a diretora atual da Trupe de Ópera Yun-Han, e também é uma figura muito conhecida no Porto de Liyue. Uma dançarina, cantora e compositora de prestígio que se apresenta na Casa de Chá Heyu.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/char/yunjin.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Geo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Lança', inline: true })
    .setImage('https://i.imgur.com/cBkBGIM.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });



module.exports = {
    data: new SlashCommandBuilder()
        .setName('build')
        .setDescription('Envia um guia sobre o personagem selecionado!')
        .addStringOption(option =>
		option.setName('personagem')
		.setDescription('Guia do Personagem:')
		.setRequired(false)
		),
        async execute(interaction) {
            const build = interaction.options.get('personagem').value;
            //anemo

            if (build === 'Xiao') {    
                await interaction.reply({ embeds: [EmbedXiao] });
            } else if (build === 'Jean') {
                await interaction.reply({ embeds: [EmbedJean] });
            } else if (build === 'Heizou') {
                await interaction.reply({ embeds: [EmbedHeizou] });
            } else if (build === 'Kazuha') {
                await interaction.reply({ embeds: [EmbedKazuha] });
            } else if (build === 'Sayu') {
                await interaction.reply({ embeds: [EmbedSayu] });
            } else if (build === 'Venti') {
                await interaction.reply({ embeds: [EmbedVenti] });
            } else if (build === 'Sucrose') {
                await interaction.reply({ embeds: [EmbedSucrose] });
            } 
            //cryo

            else if (build === 'Aloy') {
                await interaction.reply({ embeds: [EmbedAloy] });
            } else if (build === 'Eula') {
                await interaction.reply({ embeds: [EmbedEula] });
            } else if (build === 'Ganyu') {
                const message = await interaction.reply({ embeds: [EmbedGanyuF], fetchReply: true });
                message.react('➡️')
                const filter = (reaction, user) => {
                    return reaction.emoji.name === '➡️' && user.id == interaction.user.id
                };
                message.awaitReactions({filter, time: 5000})
                    .then(collected => {
                        message.edit({ embeds: [EmbedGanyuM], fetchReply: true })
                            .then(() => message.reactions.removeAll())
                });    
            } else if (build === 'Ayaka') {
                await interaction.reply({ embeds: [EmbedAyaka] });
            } else if (build === 'Qiqi') {
                await interaction.reply({ embeds: [EmbedQiqi] });
            } else if (build === 'Shenhe') {
                await interaction.reply({ embeds: [EmbedShenhe] });
            } else if (build === 'Chongyun') {
                await interaction.reply({ embeds: [EmbedChongyun] });
            } else if (build === 'Diona') {
                await interaction.reply({ embeds: [EmbedDiona] });
            } else if (build === 'Kaeya') {
                await interaction.reply({ embeds: [EmbedKaeya] });
            } 
            //electro
            
            else if (build === 'Keqing') {
                await interaction.reply({ embeds: [EmbedKeqing] });
            } else if (build === 'Raiden Shogun') {
                await interaction.reply({ embeds: [EmbedShogun] });
            }else if (build === 'Yae Miko') {
                await interaction.reply({ embeds: [EmbedYaeMiko] });
            }else if (build === 'Beidou') {
                await interaction.reply({ embeds: [EmbedBeidou] });
            }else if (build === 'Fischl') {
                await interaction.reply({ embeds: [EmbedFischl] });
            }else if (build === 'Lisa') {
                await interaction.reply({ embeds: [EmbedLisa] });
            }else if (build === 'Razor') {
                await interaction.reply({ embeds: [EmbedRazor] });
            }else if (build === 'Kujou Sara') {
                await interaction.reply({ embeds: [EmbedSara] });
            }else if (build === 'Shinobu') {
                await interaction.reply({ embeds: [EmbedShinobu] });
            }
            //geo

            else if (build === 'Albedo') {
                await interaction.reply({ embeds: [EmbedAlbedo] });
            }else if (build === 'Itto') {
                await interaction.reply({ embeds: [EmbedItto] });
            }else if (build === 'Zhongli') {
                await interaction.reply({ embeds: [EmbedZhongli] });
            }else if (build === 'Gorou') {
                await interaction.reply({ embeds: [EmbedGorou] });
            }else if (build === 'Ningguang') {
                await interaction.reply({ embeds: [EmbedNingguang] });
            }else if (build === 'Noelle') {
                await interaction.reply({ embeds: [EmbedNoelle] });
            }else if (build === 'Yunjin') {
                await interaction.reply({ embeds: [EmbedYunjin] });
            }
        },
};
