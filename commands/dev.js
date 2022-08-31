const { SlashCommandBuilder, Message, CommandInteractionOptionResolver, DiscordAPIError, AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('dev')
        .setDescription('dev command')
        .addStringOption(option =>
            option
                .setName('personagem')
                .setDescription('Nome do personagem')
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('uid')
                .setDescription('UID do Usuário')
                .setRequired(false)
        ),

    async execute(interaction) {


        const dev = interaction.member.roles.cache.has('1003009674968313866');
        const booster = interaction.member.roles.cache.has('1001494880348016791');
        if (dev || booster) {
            try {
                const buildget = interaction.options.getString('personagem');
                const build = buildget.toLocaleLowerCase();
                console.log(build)
                let uid = interaction.options.getString('uid');

                if (uid.length != 9) {
                    await interaction.reply(`O UID ${uid} está no tamanho errado!`)
                } else {
                    console.log(uid)
                    let uid_region
                    if (uid.startsWith('6')) {
                        uid_region = 'America';
                        console.log(uid_region)
                    } else if (uid.startsWith('7')) {
                        uid_region = 'Europa';
                        console.log(uid_region)
                    } else if (uid.startsWith('8')) {
                        uid_region = 'Asia';
                        console.log(uid_region)
                    } else if (uid.startsWith('9')) {
                        uid_region = 'TW, HK, MO';
                        console.log(uid_region)
                    } else if (uid.startsWith('1')) {
                        uid_region = 'Celestia';
                        console.log(uid_region)
                    } else if (uid.startsWith('2')) {
                        uid_region = 'Celestia';
                        console.log(uid_region)
                    } else if (uid.startsWith('5')) {
                        uid_region = 'Irminsul';
                        console.log(uid_region)
                    } else {
                        await interaction.reply(`O UID ${uid} é inválido!`)
                    }
                }
                if (uid) {

                    const canvas = Canvas.createCanvas(840, 400);
                    const context = canvas.getContext('2d');

                    const bg = await Canvas.loadImage(`C:/Users/Neith/Documents/G. Akademiya/database/Cards/${build}.png`)

                    context.drawImage(bg, 0, 0, 840, 400);
                    function capitalizeFirstLetter(string) {
                        return string.charAt(0).toUpperCase() + string.slice(1);
                      }
                    const buildCapital = capitalizeFirstLetter(build);
                    const perso = await Canvas.loadImage(`https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_${buildCapital}.png`);
                    

                    context.drawImage(perso, -150, 25, 750, 400);


                    const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'charbuild.png' });
                    

                    interaction.reply({ files: [attachment] });
                } else {
                    await interaction.reply(build)
                }
            } catch {
                await interaction.reply('**・Comando utilizado de maneira errônea!**\n┗ *Para mais detalhes, digite **/help build.***');
            }
        } else {
            interaction.reply({ content: `Sem permissões mínimas! Você precisa ter o cargo <@&1005255209334865950> para executar esse comando.`, ephemeral: true });
        }
    }
}
