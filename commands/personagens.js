const { SlashCommandBuilder, ReactionCollector } = require("discord.js");
const { EmbedBuilder } = require("discord.js");
const dados = require("../database/builds.json");

const elementos = {
	anemo: {
		nome: "Anemo",
		cor: "#3eb392",
		emote: "<:anemo:1015410336494538904>",
		icone: "https://static.wikia.nocookie.net/genshin-impact/images/2/2a/Elemento_Anemo.png/revision/latest/top-crop/width/360/height/360?cb=20201215171804&path-prefix=pt-br",
	},
	geo: {
		nome: "Geo",
		cor: "#b16c35",
		emote: "<:geo:1015410607396229251>}",
		icone: "https://static.wikia.nocookie.net/genshin-impact/images/8/85/Elemento_Geo.png/revision/latest/top-crop/width/360/height/360?cb=20201215171805&path-prefix=pt-br",
	},
	pyro: {
		nome: "Pyro",
		cor: "#c93a1c",
		emote: "<:pyro:1015410835985797223>",
		icone: "https://static.wikia.nocookie.net/genshin-impact/images/3/36/Elemento_Pyro.png/revision/latest/top-crop/width/360/height/360?cb=20201215171806&path-prefix=pt-br",
	},
	cryo: {
		nome: "Cryo",
		cor: "#89d1db",
		emote: "<:cryo:1015410394900222052>",
		icone: "https://static.wikia.nocookie.net/genshin-impact/images/d/d8/Elemento_Cryo.png/revision/latest/top-crop/width/360/height/360?cb=20201215171805&path-prefix=pt-br",
	},
	hydro: {
		nome: "Hydro",
		cor: "#427ab3",
		emote: "<:hydro:1015410719329615923>",
		icone: "https://static.wikia.nocookie.net/genshin-impact/images/5/5b/Elemento_Hydro.png/revision/latest/top-crop/width/360/height/360?cb=20201215171805&path-prefix=pt-br",
	},
	electro: {
		nome: "Electro",
		cor: "#816ab5",
		emote: "<:electro:1015410442765602937>",
		icone: "https://static.wikia.nocookie.net/genshin-impact/images/7/74/Elemento_Electro.png/revision/latest/top-crop/width/360/height/360?cb=20201215171805&path-prefix=pt-br",
	},
	dendro: {
		nome: "Dendro",
		cor: "#6daf75",
		emote: "<:dendro:1015410560143216680>",
		icone: "https://static.wikia.nocookie.net/genshin-impact/images/8/8c/Elemento_Dendro.png/revision/latest/top-crop/width/360/height/360?cb=20201215171805&path-prefix=pt-br",
	},
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName("personagens")
		.setDescription(
			"Envia a lista de personagens que já estão catalogados no Bot."
		)
		.addStringOption((option) =>
			option
			.setName("elemento")
			.setDescription("O Elemento do boneco que você está procurando.")
			.setRequired(false)
		),

	async execute(interaction, client) {
		let EmbedPrincipal = new EmbedBuilder()
			.setFooter({ text: "@genshin_brasil" })
			.setTimestamp();
		let elemento = interaction.options.get("elemento");
		let personagens = [];

		if (!interaction.options.get("elemento")) {
			EmbedPrincipal.setTitle("Catalogo de Personagens")
				.setDescription(`*Temos um total de ${Object.keys(dados).length} Personagens registrados na nossa database.*\n\nPara Utilizar este comando, Digite **/personagens Elemento**\n**Por exemplo:** /personagens Hydro`)
				.setColor(0x8e2cb1)
				.setImage("https://i.imgur.com/LlpKIq2.jpg");
			return interaction.reply({ embeds: [EmbedPrincipal] });
		}

		elemento = elementos[elemento.value.toLowerCase()];
		if (!elemento)
			return interaction.reply("**・Este elemento não foi identificado!**\n┗ *Tenha certeza de ter digitado: Dendro, Cryo, Hydro, Geo, Electro ou Pyro*");
		EmbedPrincipal.setTitle(`Catalogo de personagens ${elemento.nome}`)
			.setColor(elemento.cor)
			.setThumbnail(elemento.icone);

		Object.keys(dados).forEach((char) => {
			let thisChar = dados[char];
			let { nome, raridade, alias } = thisChar;
			if (thisChar.elemento === elemento.nome)
				personagens.push({ nome, raridade, alias });
		});

		EmbedPrincipal.setDescription(`*Temos um total de ${personagens.length} Personagens ${elemento.nome} registrados.*\n⠀`);

		personagens.forEach((char) => {
			EmbedPrincipal.addFields({
				name: `${char.raridade}* ${char.nome}`,
				value: char.alias ? char.alias.join(", ") : "Sem apelido registrado.",
				inline: true,
			});
		});

		interaction.reply({ embeds: [EmbedPrincipal] });
	},
};
