

const Discord = require('discord.js');
const client = new Discord.Client();
client.config = require('./config.js');

client.login(client.config.Bot.Token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if (message.content.toLowerCase().startsWith("ticket") || message.content.toLowerCase().startsWith("pedido") || message.content.toLowerCase().startsWith("orden")) { 		// Detecta uma palavra

			message.channel.send(`!jira`); // Envia uma mensagem
	}
}
)

client.on('message', message => {
	if (message.content.toLowerCase().startsWith("musica")) {
		// Extrai a parte da mensagem após "musica"
		const fraseMusica = message.content.slice(6).trim();
		
		// Responde com a frase da música
		message.channel.send(`!play ${fraseMusica}`);
	}})
	;
