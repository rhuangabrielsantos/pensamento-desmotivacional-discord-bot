const thoughts = require("../thoughts.json");
const config = require("../config.json");

const getCommandByDiscordMessage = (message) => {
    const commandBody = message.content.slice(config.PREFIX.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    return command;
}

const getRandomThought = () => {
    return thoughts[Math.floor(Math.random() * thoughts.length)]
}

module.exports = { getCommandByDiscordMessage, getRandomThought }