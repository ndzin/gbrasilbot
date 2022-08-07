const { EmbedBuilder } = require('discord.js');

module.exports = {
 
    data: "guildMemberAdd", async execute(member) {
        console.log("Novo membro: ", member)
        member.guild.channels.cache.get("994744835183480986").send(`${member.user} entrou`)
    }


}