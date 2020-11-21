//Specify packages here
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //Tries to get the user that was mentioned but if it does not find anyone it will use the author's used.
    let user = message.mentions.users.first() || message.author;

    //Creates a RichEmbed message
    let embed = new Discord.MessageEmbed()
    .setAuthor(user.username, user.displayAvatarURL())
    .setColor("#eb3a34")
    .setImage(user.displayAvatarURL({dynamic: true, size: 1024})) //The dynamic option allows you to display gifs
    message.channel.send(embed);
}

module.exports.help = {
    name: "avatar", //Main commands trigger
    aliases: [] //Aliases
}