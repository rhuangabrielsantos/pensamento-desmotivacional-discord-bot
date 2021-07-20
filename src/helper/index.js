const getCommandByDiscordMessage = message => {
  const commandBody = message.content.slice(process.env.PREFIX.length);
  const args = commandBody.split(" ");

  if (args[1] === "add") {
    return {
      command: "add",
      message: commandBody.slice(5),
    };
  }

  const command = args.shift().toLowerCase();

  return { command, message: null };
};

const generateEmbedMessage = ({ title, message }) => {
  const Discord = require("discord.js");

  const embed = new Discord.MessageEmbed();

  embed.setTitle(title);
  embed.setColor(0xff0000);
  embed.setDescription(message);

  return embed;
};

module.exports = { getCommandByDiscordMessage, generateEmbedMessage };
