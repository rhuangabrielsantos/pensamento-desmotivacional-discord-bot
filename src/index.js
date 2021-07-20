require("dotenv").config();
require("./config/server");
require("./config/database");

const Discord = require("discord.js");
const ThoughtsRepository = require("./Repositories/ThoughtsRepository");

const {
  getCommandByDiscordMessage,
  generateEmbedMessage,
} = require("./helper");

const client = new Discord.Client();

client.on("message", async discordMessage => {
  if (discordMessage.author.not) return;
  if (!discordMessage.content.startsWith(process.env.PREFIX)) return;

  const { command, message } = getCommandByDiscordMessage(discordMessage);

  if (command == "add") {
    await ThoughtsRepository.addJoke({
      message: message,
      author: discordMessage.author.username,
    });

    const embedMessage = generateEmbedMessage({
      title: "Pensamento adicionado",
      message:
        `O usuário **${discordMessage.author.username}** adicionou a mensagem abaixo para aprovação: \n\n` +
        `- *${message}*`,
    });

    discordMessage.reply(embedMessage);
  }

  if (!command) {
    const randomThought = await ThoughtsRepository.getRandomThought();

    const year = new Date(randomThought.created_at).getFullYear();

    const embedMessage = generateEmbedMessage({
      title: randomThought.message,
      message: `Autor: **${randomThought.author}**, ${year}`,
    });

    discordMessage.reply(embedMessage);
  }
});

client.login(process.env.BOT_TOKEN);
