//Specify packages here
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "YOUR ID") return //!! NEVER EVER GIVE EVAL PERMS TO ANYONE ELSE THAN U !!

    let code = args.slice(1).join(" ");
    let evaled = eval(code);

    //That returns a string representation of an object if needed
    if(typeof evaled !== "string") evaled = require("util").inspect(evaled); 

    message.channel.send("```json\n" + evaled + "```").catch(err => {
        if(err.code === 50035){ //Error code telling us about a message with too many characters (2000)
            let length = evaled.length;
            let messageNumber = 0;
            while(length > 0){
                message.channel.send("```json\n" + evaled.slice(messageNumber*1986, (messageNumber+1)*1986) + "```");
                length -= (messageNumber+1)*1986;
                messageNumber++;
            }
        }
    });
}

module.exports.help = {
    name: "eval", //Main commands trigger
    aliases: [] //Aliases
}