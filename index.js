const { Client, Collection } = require("discord.js")
const fs = require("node:fs")
const path = require("node:path")
require("dotenv").config()

const client = new Client({
  allowedMentions: {
    parse: ["users", "roles"],
    repliedUser: true,
  },
  intents: [
    "Guilds",
    "GuildMessages",
    "GuildPresences",
    "GuildMembers",
    "GuildMessageReactions",
    "GuildMessageTyping",
    "MessageContent",
  ],
})

client.commands = new Collection()
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)
  client.commands.set(command.data.name, command)
}

const eventsPath = path.join(__dirname, "events")
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"))

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file)
  const event = require(filePath)
  if (event.once) {
    client.once(event.name, async (...args) => await event.execute(...args, client))
  } else {
    client.on(event.name, async (...args) => await event.execute(...args, client))
  }
}

require("./deploy-commands.js")
client.login(process.env.TOKEN)
