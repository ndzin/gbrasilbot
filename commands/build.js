const { SlashCommandBuilder, Message, EmbedBuilder } = require("discord.js")
const dados = require("../database/builds.json")

const emotes = {
  anemo: "<:anemo:1015410336494538904> ",
  geo: "<:geo:1015410607396229251>",
  pyro: "<:pyro:1015410835985797223> ",
  cryo: "<:cryo:1015410394900222052> ",
  hydro: "<:hydro:1015410719329615923> ",
  electro: "<:electro:1015410442765602937> ",
  dendro: "<:dendro:1015410560143216680> ",
  espada: "<:sword:1015358705308545054> ",
  espadão: "<:claymore:1015358776108384306> ",
  catalisador: "<:catalyst:1015358849122844702> ",
  lança: "<:lance:1015358616636772482>",
  arco: "<:bow:1015358949370900534> ",
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("build")
    .setDescription("Envia um guia sobre o personagem selecionado!")
    .addStringOption(option =>
      option
        .setName("personagem")
        .setDescription("Guia do Personagem:")
        .setRequired(false)
    ),
  help: {
    exemplo: "build **nome do personagem**",
  },

  async execute (interaction) {
    try {
      let personagem = interaction.options.get("personagem").value.toLocaleLowerCase()
      let char = dados[personagem]
      Object.keys(dados).forEach(thisChar => {
        if (dados[thisChar]?.alias?.includes(personagem)) char = dados[thisChar]
      })
      if (!char)
        return interaction.reply(
          "**・Este personagem ou não existe ou não foi catalogado ainda!**\n┗ *Para mais detalhes, digite **/help build.***"
        )

      let raridade =
        char.raridade === 5
          ? "<:raridade2:1015412419188768959><:raridade2:1015412419188768959><:raridade2:1015412419188768959><:raridade2:1015412419188768959><:raridade2:1015412419188768959>"
          : "<:raridade2:1015412419188768959><:raridade2:1015412419188768959><:raridade2:1015412419188768959><:raridade2:1015412419188768959>"
      let BuildEmbed = new EmbedBuilder()
        .setColor(char.corPrincipal)
        .setAuthor({ name: `${char.nome} ✦ ${char.tipoDeBuild}` })
        .setDescription(`*${char.descricao}*\n⠀`)
        .setThumbnail(char.thumbnail)
        .addFields(
          { name: "Raridade", value: raridade, inline: true },
          {
            name: "Elemento",
            value: `${emotes[char.elemento.toLowerCase()]} ${char.elemento}`,
            inline: true,
          },
          { name: "Arma", value: `${emotes[char.arma.toLowerCase()]} ${char.arma}`, inline: true }
        )
        .setImage(char.imagem)
        .setTimestamp()
        .setFooter({ text: "@genshin_brasil" })

      let pagina = 0
      let firstTimeBack = true
      let ebd = {
        alterar: msg => {
          BuildEmbed.setAuthor({
            name: `${char.nome} ✦ ${char.extraBuilds[pagina].tipoDeBuild}`,
          }).setImage(char.extraBuilds[pagina].imagem)
          msg.edit({ embeds: [BuildEmbed], fetchReply: true })
        },
        resetar: msg => {
          BuildEmbed.setAuthor({ name: `${char.nome} ✦ ${char.tipoDeBuild}` }).setImage(char.imagem)
          msg.edit({ embeds: [BuildEmbed], fetchReply: true })
        },
      }
      await interaction.reply({ embeds: [BuildEmbed], fetchReply: true }).then(msg => {
        if (char.extraBuilds) {
          msg.react("⬅️")
          msg.react("➡️")

          const filter = (reaction, user) => {
            return user.id === interaction.user.id
          }
          const collector = msg.createReactionCollector({ filter, time: 60000 })
          collector.on("collect", async (reaction, user) => {
            if (reaction.emoji.name === "➡️") {
              if (pagina === char.extraBuilds.length) {
                pagina = 0
                ebd.resetar(msg)
              } else {
                ebd.alterar(msg)
                pagina++
              }
              msg.reactions.resolve("➡️").users.remove(interaction.user.id)
            }
            if (reaction.emoji.name === "⬅️") {
              pagina--
              if (pagina >= 0) {
                ebd.alterar(msg)
              } else {
                pagina = char.extraBuilds.length
                if (firstTimeBack) {
                  firstTimeBack = false
                  pagina = char.extraBuilds.length - 1
                  ebd.alterar(msg)
                } else {
                  ebd.resetar(msg)
                }
              }
              msg.reactions.resolve("⬅️").users.remove(interaction.user.id)
            }
          })
        }
      })
    } catch (err) {
      console.error(err)
      await interaction.reply(
        "**・Comando utilizado de maneira errônea!**\n┗ *Para mais detalhes, digite **/help build.***"
      )
    }
  },
}
