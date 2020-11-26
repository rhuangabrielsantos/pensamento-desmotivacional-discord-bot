require('dotenv').config()
let express = require('express');
let app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

const Discord = require("discord.js");
const config = require("./config.json");

const { getCommandByDiscordMessage, getRandomThought } = require('./handler');

const client = new Discord.Client();

client.on("message", (message) => {
    if (message.author.not) return;
    if (!message.content.startsWith(config.PREFIX)) return;

    const command = getCommandByDiscordMessage(message)

    if (command == 'pensamento') {
        let randomThought = getRandomThought();
        message.reply(randomThought.message);
    }
})

client.login(process.env.BOT_TOKEN);
