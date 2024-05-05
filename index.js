

const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch'); // Importa a função fetch
client.config = require('./config.js');

client.login(client.config.Bot.Token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
if (message.content.toLowerCase().startsWith("ticket") || message.content.toLowerCase().startsWith("pedido") || message.content.toLowerCase().startsWith("ordem")) { // Detecta uma palavra

message.channel.send(`!jira`); // Envia uma mensagem
}
}
)

client.on('message', message => {
if (message.content.toLowerCase().startsWith("musica") || message.content.toLowerCase().startsWith("tocar")) {
// Extrai a parte da mensagem após "musica ou tocar"
const fraseMusica = message.content.slice(6).trim();

// Responde com a frase da música
message.channel.send(`!play ${fraseMusica}`);
}})

// Define a função generateTextWithPrompt
function generateTextWithPrompt(message, promptText) {
    const url = 'http://192.168.15.115:11434/api/generate';
    const payload = {
        model: "llama3",
        prompt: promptText,
        stream: false,
        options: {
            num_ctx: 1024
        }
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar solicitação: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        message.channel.send(data.response); // Envia a resposta para o canal do Discord
    })
    .catch(error => {
        console.error('Erro ao enviar solicitação:', error);
    })
}

client.on('message', message => {
    if (message.content.toLowerCase().startsWith("feverdream")) {
        const promptText = message.content.slice(10).trim();
        generateTextWithPrompt(message, promptText); 
}});
