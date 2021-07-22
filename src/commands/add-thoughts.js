const ThoughtsRepository = require("../Repositories/ThoughtsRepository");
const { generateEmbedMessage } = require("../helper");

module.exports = {
  name: "add",
  description: "Adiciona um pensamento desmotivacional para aprovação!",
  async execute(message, args) {
    const thought = args.join(" ");

    if (!thought) {
      return message.reply("Você precisa digitar um pensamento!");
    }

    await ThoughtsRepository.addJoke({
      message: thought,
      author: message.author.username,
    });

    const embedMessage = generateEmbedMessage({
      title: "Pensamento adicionado",
      message:
        `O usuário **${message.author.username}** adicionou a mensagem abaixo para aprovação: \n\n` +
        `- *${thought}*`,
    });

    message.channel.send(embedMessage);
  },
};
