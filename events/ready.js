
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Bot ON! Iniciado como ${client.user.tag}`);
	},
};