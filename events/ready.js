const { ActivityType } = require("discord.js")

module.exports = {
  name: "ready",
  once: true,
  execute (client) {
    console.log(`Bot Ligado Como ${client.user.tag}`)
    client.user.setActivity(`você digitar /help ! 💕`, { type: ActivityType.Watching })
    client.user.setStatus("online")
  },
}
