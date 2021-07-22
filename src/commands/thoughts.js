const ThoughtsRepository = require("../Repositories/ThoughtsRepository");
const { generateEmbedMessage } = require("../helper");

module.exports = {
  name: "pensamento",
  description: "Um pensamento desmotivacional para seu dia!",
  async execute(message, args) {
    const randomThought = await ThoughtsRepository.getRandomThought();
    const year = new Date(randomThought.created_at).getFullYear();

    const embedMessage = generateEmbedMessage({
      title: randomThought.message,
      message: `Autor: **${randomThought.author}**, ${year}`,
    });

    message.channel.send(embedMessage);
  },
};
