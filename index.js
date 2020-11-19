const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

const client = new Discord.Client(); //Create an instance of a Discord Client
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) throw err;

    let jsfiles = files.filter(f => f.split(".").pop() === "js"); //Searches for all JavaScript files from the "commands" folder.
    if(jsfiles.length <= 0){
        return console.log("Couldn't find commands.");
    }

    jsfiles.forEach(f => {
        let props = require(`./commands/${f}`);
        client.commands.set(props.help.name, props);
        console.log(`-> ${f} loaded!`);
    })
})

//Call when the client becomes ready to start working.
client.on("ready", () => {
    console.log(`${client.user.username} is ready!`);
})

//Emitted whenever a message is created.
client.on("message", async message => {
    if(message.author.bot) return; //In most cases we don't want our bot to respond to commands from another bots.
    if(!message.content.startsWith(config.prefix)) return; //If the received message does not start with a prefix, there is no need to react to it further.

    let args = message.content.split(" "); //The message will be split into individual words and saved to array.
    let command = args[0].toLowerCase();

    let commandExecutor = client.commands.find(c =>
        config.prefix + c.help.name == command 
        ||
        c.help.aliases.includes(command.slice(config.prefix.length)));
    
    if(commandExecutor) commandExecutor.run(client, message, args);
})

//Logs the client in, establishing a websocket connection to Discord.
client.login(config.token);