const { EmbedBuilder } = require('discord.js');

const EmbedXiao = new EmbedBuilder()
    .setColor(0x002529)
    .setAuthor({ name: 'Xiao ✦ Main DPS Build' })
    .setDescription('*Xiao (chinês: 魈 Xiāo, "Demônio"), Nome de Yaksha Alatus, é um adeptus e o único membro restante dos Cinco Yakshas enviados por Morax para subjugar os espíritos demoníacos que atormentavam Liyue. Ele atualmente mora no Albergue Wangshu, onde se isola das multidões e de interações humanas.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6016.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6004.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Anemo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espada', inline: true })
    .setImage('https://i.imgur.com/VK9DzPx.png')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedKazuha = new EmbedBuilder()
    .setColor(0x0c2d29)
    .setAuthor({ name: 'Kaedehara Kazuha ✦ EM Support Build' })
    .setDescription('*Um samurai errante do outrora famoso Clã Kaedehara, Kazuha é um membro da tripulação da Frota Crux, acolhido por Beidou depois de ser declarado um criminoso por Baal por tirar uma visão de suas mãos.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6037.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6039.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_n1059.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6012.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6031.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6043.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6003.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6036.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6024.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6047.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6025.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6028.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6033.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6009.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6026.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6026.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6030.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6040.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6049.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6014.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6020.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6051.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6006.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6001.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6042.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6027.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6046.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6019.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6045.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6017.png')
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
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6048.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Geo', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Lança', inline: true })
    .setImage('https://i.imgur.com/cBkBGIM.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

//hydro

const EmbedAyato = new EmbedBuilder()
    .setColor(0x001240)
    .setAuthor({ name: 'Kamisato Ayato ✦ Main DPS Build' })
    .setDescription('*O jovem promissor e chefe atual da Comissão Yashiro e do Clã Kamisato, é culto e educado, e sempre tem uma forma de fazer as coisas.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6050.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Hydro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espada', inline: true })
    .setImage('https://i.imgur.com/V4eNyGN.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedKokomi = new EmbedBuilder()
    .setColor(0x091a2d)
    .setAuthor({ name: 'Sangonomiya Kokomi ✦ Sustain Build' })
    .setDescription('*Sacerdotisa Divina da Ilha Watatsumi, Kokomi serve sua terra como líder suprema.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6041.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Hydro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Catalisador', inline: true })
    .setImage('https://i.imgur.com/P39crpH.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedMonaNUKE = new EmbedBuilder()
    .setColor(0x191737)
    .setAuthor({ name: 'Ast Mona ✦ Nuke DMG Build' })
    .setDescription('*Astróloga de grande habilidade e igualmente grande orgulho, Mona fixou residência em Mondstadt para evitar incorrer na ira de sua mestra depois de ler inadvertidamente o diário dela.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6029.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Hydro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Catalisador', inline: true })
    .setImage('https://i.imgur.com/9zs9P7q.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedMonaF = new EmbedBuilder()
    .setColor(0x191737)
    .setAuthor({ name: 'Ast Mona ✦ Enabler Build' })
    .setDescription('*Astróloga de grande habilidade e igualmente grande orgulho, Mona fixou residência em Mondstadt para evitar incorrer na ira de sua mestra depois de ler inadvertidamente o diário dela.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6029.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Hydro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Catalisador', inline: true })
    .setImage('https://i.imgur.com/9BLVACP.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedTartaglia = new EmbedBuilder()
    .setColor(0x241417)
    .setAuthor({ name: 'Tartaglia ✦ Enabler Build' })
    .setDescription('*Childe é o Nº 11 dos Onze Mensageiros dos Fatui. Seguindo o perigo onde quer que vá, Childe está sempre ansioso por um desafio. Ele é considerado um dos membros mais perigosos dos Mensageiros.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6022.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Hydro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/ZxQPgnM.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedYelan = new EmbedBuilder()
    .setColor(0x001a3e)
    .setAuthor({ name: 'Yelan ✦ Sub DPS Build' })
    .setDescription('*Uma pessoa misteriosa que afirma trabalhar para o Ministério dos Assuntos Civis de Liyue. No entanto, ela é na verdade a chefe da Casa de Chá Yanshang.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6052.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Hydro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/wd7pxj1.png')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedBarbara = new EmbedBuilder()
    .setColor(0x00213a)
    .setAuthor({ name: 'Barbara ✦ Sustain Build' })
    .setDescription('*Barbara é a Diaconisa da Igreja de Favonius e auto proclamada "ídolo" depois de aprender sobre eles com a intrépida aventureira Alice.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6008.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Hydro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Catalisador', inline: true })
    .setImage('https://i.imgur.com/aqmJeZu.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedXingqiu = new EmbedBuilder()
    .setColor(0x001d3d)
    .setAuthor({ name: 'Xingqiu ✦ Enabler Build' })
    .setDescription('*Xingqiu é o segundo filho do dono da Guilda de Comerciantes de Feiyun, um grupo influente em Liyue, e também é um autoproclamado praticante das artes do Clã Guhua.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6015.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Hydro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espada', inline: true })
    .setImage('https://i.imgur.com/3SzEDGx.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

//pyro

const EmbedDiluc = new EmbedBuilder()
    .setColor(0x420f0f)
    .setAuthor({ name: 'Diluc ✦ Main DPS Build' })
    .setDescription('*Nascido na influente Família Ragnvindr, Diluc é o atual proprietário do Adega do Alvorecer e um nobre de alta estima na sociedade de Mondstadt. Embora um incidente anterior o tenha levado a se separar dos Cavaleiros de Favonius, ele continua a proteger Mondstadt à sua própria maneira.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6010.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Pyro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espadão', inline: true })
    .setImage('https://i.imgur.com/UCybao2.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedHutao = new EmbedBuilder()
    .setColor(0x371610)
    .setAuthor({ name: 'Hu Tao ✦ Main DPS Build' })
    .setDescription('*Hutao - A 77ª diretora da Funerária de Wangsheng. Apesar de ser jovem, já está encarregada de todos os assuntos funerários de Liyue.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6034.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Pyro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Lança', inline: true })
    .setImage('https://i.imgur.com/WReWmWG.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedKlee = new EmbedBuilder()
    .setColor(0x451811)
    .setAuthor({ name: 'Klee ✦ Main DPS Build' })
    .setDescription('*A filha da intrépida — e destrutiva — aventureira Alice, Klee segue sua mãe de várias maneiras, para grande consternação dos Cavaleiros de Favonius a quem ela foi confiada.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6018.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Pyro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Catalisador', inline: true })
    .setImage('https://i.imgur.com/pzdazY4.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedYoimiya = new EmbedBuilder()
    .setColor(0x38150f)
    .setAuthor({ name: 'Yoimiya ✦ Main DPS Build' })
    .setDescription('*Yoimiya é filha de Naganohara Ryuunosuke e a atual proprietária da Fogos de Artifício Naganohara. Com seus fogos de artifício coloridos e personalidade extrovertida, Yoimiya é amada por todos na Ilha Narukami, que afirmam que o verão não é o mesmo sem ela.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6038.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Pyro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/hKXqJpW.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedAmberDPS = new EmbedBuilder()
    .setColor(0x351a18)
    .setAuthor({ name: 'Amber ✦ Main DPS Build' })
    .setDescription('*Amber é a única Aventureira restante dos Cavaleiros de Favonius. Ela está sempre pronta para ajudar os cidadãos de Mondstadt - seja em algo simples ou talvez uma tarefa mais desafiadora.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6011.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Pyro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/iGgl6qj.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedAmberSUP = new EmbedBuilder()
    .setColor(0x351a18)
    .setAuthor({ name: 'Amber ✦ Support Build' })
    .setDescription('*Amber é a única Aventureira restante dos Cavaleiros de Favonius. Ela está sempre pronta para ajudar os cidadãos de Mondstadt - seja em algo simples ou talvez uma tarefa mais desafiadora.*')
    .setThumbnail('https://enka.network/ui/UI_AvatarIcon_Amber.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Pyro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/TmlQRey.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedBennett = new EmbedBuilder()
    .setColor(0x461208)
    .setAuthor({ name: 'Bennett ✦ Support Build' })
    .setDescription('*Um órfão descoberto por um aventureiro idoso quando bebê, Bennett foi criado na Guilda de Aventureiros de Mondstadt. Ele é o único membro da "Equipe de aventura de Benny", já que todos os outros deixaram a equipe depois de experimentar o infortúnio constante que o segue.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6021.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Pyro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espada', inline: true })
    .setImage('https://i.imgur.com/l9BI5yc.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedThoma = new EmbedBuilder()
    .setColor(0x2b0e18)
    .setAuthor({ name: 'Thoma ✦ Sustain Build' })
    .setDescription('*Empregado do Clã Kamisato da Comissão Yashiro e também um conhecido "mediador" em Inazuma.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6044.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Pyro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Lança', inline: true })
    .setImage('https://i.imgur.com/avSJIIi.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedXiangling = new EmbedBuilder()
    .setColor(0x3f1500)
    .setAuthor({ name: 'Xiangling ✦ DPS Build' })
    .setDescription('*Ela é a chefe de cozinha do Restaurante Wanmin e o administra ao lado de seu pai Chef Mao. Como chef, Xiangling não tem medo de experimentar receitas diferentes ou ingredientes "exóticos" ... Tornando seus pratos únicos.*')
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6013.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Pyro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Lança', inline: true })
    .setImage('https://i.imgur.com/AWhaTNI.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedXinyan = new EmbedBuilder()
    .setColor(0x321514)
    .setAuthor({ name: 'Xinyan ✦ DPS Build' })
    .setDescription("*Rock 'n' roll é um estilo de música relativamente impopular em Liyue, tendo sido recentemente trazido de Fontaine. Xinyan, no entanto, adora o som — e ela está lentamente, mas seguramente, acumulando uma base de fãs própria enquanto se apresenta no Porto de Liyue.*")
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6032.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Pyro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Espadão', inline: true })
    .setImage('https://i.imgur.com/WtFf4kp.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedYanfei = new EmbedBuilder()
    .setColor(0x2c0d12)
    .setAuthor({ name: 'Yanfei ✦ Main DPS Build' })
    .setDescription("*Consultora jurídica do Porto de Liyue, metade Besta Iluminada, assim como Ganyu. Nascida em uma época de paz, ela é uma das poucas Bestas Iluminadas que não assinou um contrato com Rex Lápis, porém seu trabalho faz com que ela lide com contratos constantemente.*")
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6035.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Pyro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Catalisador', inline: true })
    .setImage('https://i.imgur.com/PuPjdu7.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

//dendro

const EmbedCollei = new EmbedBuilder()
    .setColor(0x2B441D)
    .setAuthor({ name: 'Collei ✦ Sub DPS Build' })
    .setDescription("*Uma Guarda-Florestal em Treinamento que patrulha a Floresta Avidya. Por trás de sua personalidade entusiasmada, encontra-se uma personalidade bastante introvertida.*")
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_n1067.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Dendro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/kYBN5AL.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedTighnari = new EmbedBuilder()
    .setColor(0x243822)
    .setAuthor({ name: 'Tighnari ✦ Enabler Build' })
    .setDescription("*Um jovem pesquisador que conhece bastante de botânica que atualmente atua como um Patrulheiro Florestal da Floresta Avidya. Ele é extremamente sincero com um bom coração — e muito bom na orientação até mesmo dos alunos mais monótonos.*")
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_n1069.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Dendro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/neXjn0Z.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const Embeds = {
    xiao: EmbedXiao,
    jean: EmbedJean,
    kazuha: EmbedKazuha,
    venti: EmbedVenti,
    sayu: EmbedSayu,
    heizou: EmbedHeizou,
    sucrose: EmbedSucrose,
    mona: EmbedMonaF,
    mona2: EmbedMonaNUKE,
    eula: EmbedEula,
    aloy: EmbedAloy,
    ayaka: EmbedAyaka,
    'kamisato ayaka': EmbedAyaka,
    ganyu: EmbedGanyuF,
    ganyu2: EmbedGanyuM,
    qiqi: EmbedQiqi,
    shenhe: EmbedShenhe,
    chongyun: EmbedChongyun,
    diona: EmbedDiona,
    rosaria: EmbedRosaria,
    kaeya: EmbedKaeya,
    keqing: EmbedKeqing,
    'raiden shogun': EmbedShogun,
    raiden: EmbedShogun,
    shogun: EmbedShogun,
    raidenshogun: EmbedShogun,
    yaemiko: EmbedYaeMiko,
    'yae miko': EmbedYaeMiko,
    yae: EmbedYaeMiko,
    miko: EmbedYaeMiko,
    beidou: EmbedBeidou,
    fischl: EmbedFischl,
    shinobu: EmbedShinobu,
    kuki: EmbedShinobu,
    'kuki shinobu': EmbedShinobu,
    lisa: EmbedLisa,
    razor: EmbedRazor,
    'kujou sara': EmbedSara,
    sara: EmbedSara,
    albedo: EmbedAlbedo,
    itto: EmbedItto,
    'arataki itto': EmbedItto,
    'aratakiitto': EmbedItto,
    'itto': EmbedItto,
    zhongli: EmbedZhongli,
    gorou: EmbedGorou,
    ningguang: EmbedNingguang,
    // noelle: EmbedNoelle,
    yunjin: EmbedYunjin,
    ayato: EmbedAyato,
    'kamisato ayato': EmbedAyato,
    kokomi: EmbedKokomi,
    'sangonomiya kokomi': EmbedKokomi,
    childe: EmbedTartaglia,
    tartaglia: EmbedTartaglia,
    yelan: EmbedYelan,
    barbara: EmbedBarbara,
    xingqiu: EmbedXingqiu,
    pauzudo23cm: EmbedItto,
    'alcoólatra': EmbedVenti,
    diluc: EmbedDiluc,
    hutao: EmbedHutao,
    'hu tao': EmbedHutao,
    klee: EmbedKlee,
    yoimiya: EmbedYoimiya,
    amber: EmbedAmberDPS,
    amber2: EmbedAmberSUP,
    bennett: EmbedBennett,
    thoma: EmbedThoma,
    tohma: EmbedThoma,
    xiangling: EmbedXiangling,
    xinyan: EmbedXinyan,
    yanfei: EmbedYanfei,
    feiyan: EmbedYanfei,
    tighnari: EmbedTighnari,
    collei: EmbedCollei,
}
module.exports = Embeds

