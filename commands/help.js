const { EmbedBuilder, SlashCommandBuilder } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Envia a lista de comandos do bot!")
    .addStringOption(option =>
      option
        .setName("comando")
        .setDescription("Comando que desejas ajuda:")
        .setRequired(false)
    ),
    help: {
        exemplo: "help **comando**"
    },

  async execute (interaction, client) {
    let commandToGetHelp = interaction.options.get("comando")?.value.toLowerCase()
    const baseEmbed = new EmbedBuilder()
    .setColor(0x8e2cb1)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/994744837066731530/1003143693563351070/gegesgegesg.png"
    )
    .setTimestamp()
    .setFooter({ text: "@genshin_brasil" })

    if(commandToGetHelp) {
        commandToGetHelp = client.commands.get(commandToGetHelp)
        if(!commandToGetHelp) return await interaction.reply("**・Este comando parece não existir!**\n┗ *Para ver a lista de comandos, digite **/help.***")
        const example = (commandToGetHelp.help) ? `/${commandToGetHelp.help.exemplo}` : "Um exemplo para este comando não foi registrado ainda."
        const description = commandToGetHelp.data.description || "Descrição não registrada"
        baseEmbed.setTitle(`Ajuda de comandos`)
        .setDescription(`*${commandToGetHelp.data.name}\n${description}*\n\n**Como utilizar:**\n${example}`)

        return await interaction.reply({embeds: [baseEmbed]})
    }

    let commandList = ""
    let commandIndex = 0
    client.commands.forEach((command) => {
        command = command.data
        commandIndex++
        commandList += `**${commandIndex}・ ${command.name}**\n*${command.description}*\n`
    })

    baseEmbed.setTitle("Lista de Comandos da Akademiya")
    .setDescription(`*Bem-Vindo(a) a Akademiya, Aqui está uma lista de comandos que possam lhe ajudar*\n\n${commandList}`)
    
    await interaction.reply({embeds: [baseEmbed]})
  },
}
