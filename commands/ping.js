//Specify packages here
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("🏓 Pong!").then(m => {
        m.edit(`Latency: ${Math.floor(m.createdTimestamp - message.createdTimestamp)} ms`) //The time difference between the user sending the message and the bot response
    });
}

module.exports.help = {
    name: "ping", //Main commands trigger
    aliases: ["lag", "latency"] //Aliases
}