const { EmbedBuilder } = require('discord.js');

const EmbedTighnari = new EmbedBuilder()
    .setColor(0x243822)
    .setAuthor({ name: 'Tighnari ✦ Guia de Ascensão' })
    .setDescription("\u200b")
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_n1069.png')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Dendro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Arco', inline: true })
    .setImage('https://i.imgur.com/73MAS67.jpg')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedCyno = new EmbedBuilder()
    .setColor(0x3816b5)
    .setAuthor({ name: 'Cyno ✦ Guia de Ascensão' })
    .setDescription("\u200b")
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_n1071.webp')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Electro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Lança', inline: true })
    .setImage('https://raw.githubusercontent.com/ndzin/akademiya-database/main/db/ascension/ASC_Cyno.png')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });

const EmbedShogun = new EmbedBuilder()
    .setColor(0x262549)
    .setAuthor({ name: 'Raiden Shogun ✦ Guia de Ascensão' })
    .setDescription("\u200b")
    .setThumbnail('https://genshin.honeyhunterworld.com/img/i_6040.webp')
    .addFields(
        { name: 'Raridade', value: '<:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327><:5Star:1003059303508361327>', inline: true },
        { name: 'Elemento', value: 'Electro', inline: true },
    )
    .addFields({ name: 'Arma', value: 'Lança', inline: true })
    .setImage('https://raw.githubusercontent.com/ndzin/akademiya-database/main/db/ascension/ASC_Shogun.png')
    .setTimestamp()
    .setFooter({ text: '@genshin_brasil', });



const Embeds = {
    // xiao: EmbedXiao,
    // jean: EmbedJean,
    // kazuha: EmbedKazuha,
    // venti: EmbedVenti,
    // sayu: EmbedSayu,
    // heizou: EmbedHeizou,
    // sucrose: EmbedSucrose,
    // mona: EmbedMonaF,
    // mona2: EmbedMonaNUKE,
    // eula: EmbedEula,
    // ayaka: EmbedAyaka,
    // 'kamisato ayaka': EmbedAyaka,
    // ganyu: EmbedGanyuF,
    // ganyu2: EmbedGanyuM,
    // qiqi: EmbedQiqi,
    // shenhe: EmbedShenhe,
    // chongyun: EmbedChongyun,
    // diona: EmbedDiona,
    // rosaria: EmbedRosaria,
    // kaeya: EmbedKaeya,
    // keqing: EmbedKeqing,
    'raiden shogun': EmbedShogun,
    raiden: EmbedShogun,
    shogun: EmbedShogun,
    raidenshogun: EmbedShogun,
    // yaemiko: EmbedYaeMiko,
    // yae: EmbedYaeMiko,
    // miko: EmbedYaeMiko,
    // beidou: EmbedBeidou,
    // fischl: EmbedFischl,
    // shinobu: EmbedShinobu,
    // kuki: EmbedShinobu,
    // 'kuki shinobu': EmbedShinobu,
    // lisa: EmbedLisa,
    // razor: EmbedRazor,
    // 'kujou sara': EmbedSara,
    // sara: EmbedSara,
    // albedo: EmbedAlbedo,
    // itto: EmbedItto,
    // 'arataki itto': EmbedItto,
    // 'aratakiitto': EmbedItto,
    // 'itto': EmbedItto,
    // zhongli: EmbedZhongli,
    // gorou: EmbedGorou,
    // ningguang: EmbedNingguang,
    // noelle: EmbedNoelle,
    // yunjin: EmbedYunjin,
    // ayato: EmbedAyato,
    // 'kamisato ayato': EmbedAyato,
    // kokomi: EmbedKokomi,
    // 'sangonomiya kokomi': EmbedKokomi,
    // childe: EmbedTartaglia,
    // tartaglia: EmbedTartaglia,
    // yelan: EmbedYelan,
    // barbara: EmbedBarbara,
    // xingqiu: EmbedXingqiu,
    // pauzudo23cm: EmbedItto,
    // 'alcoólatra': EmbedVenti,
    // diluc: EmbedDiluc,
    // hutao: EmbedHutao,
    // 'hu tao': EmbedHutao,
    // klee: EmbedKlee,
    // yoimiya: EmbedYoimiya,
    // amber: EmbedAmberDPS,
    // amber2: EmbedAmberSUP,
    // bennett: EmbedBennett,
    // thoma: EmbedThoma,
    // tohma: EmbedThoma,
    // xiangling: EmbedXiangling,
    // xinyan: EmbedXinyan,
    // yanfei: EmbedYanfei,
    // feiyan: EmbedYanfei,
    tighnari: EmbedTighnari,
    // collei: EmbedCollei,
    'eletricanubis': EmbedCyno
}
module.exports = Embeds

