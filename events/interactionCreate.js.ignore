module.exports = {
  name: "interactionCreate",
  async execute (interaction, client) {
    if (!interaction.isChatInputCommand()) return

    const command = client.commands.get(interaction.commandName)
    const config = command.config

    if (!command) return
    if (config?.dev) {
      const role =
        interaction.member.roles.cache.has("1003009674968313866") ||
        interaction.member.roles.cache.has("1001494880348016791")
      interaction.reply({
        content: `Sem permissões mínimas! Você precisa ter o cargo <@&1005255209334865950> para executar esse comando.`,
        ephemeral: true,
      })
    }

    try {
      await command.execute(interaction, client)
    } catch (error) {
      if (error) {
        console.error(error)
        await interaction.reply(
          `**・Comando utilizado de maneira errônea!**\n┗ *Para mais detalhes, digite **/help ${interaction.commandName}.***`
        )
      }
    }
  },
}
