### discordjs-bot-template
Template for discord.js projects

### Config + Setup
- Enter the bot token & prefix in config.json file
- Make sure you have node.js installed
- Open terminal in project directory
- Install dependencies by command `npm install`
- Run bot by `node index.js`

### Example commands:
- ping
- eval
- avatar

### How to add new commands?
- Create new file inside "commands" folder | e.g. avatar.js
- Copy the example below and adapt it to your needs
```js
    //Specify packages here
    const Discord = require("discord.js");

    module.exports.run = async (bot, message, args) => {
        message.channel.send("🏓 Pong!").then(m => {
            //The time difference between the user sending the message and the bot response
            m.edit(`Latency: ${Math.floor(m.createdTimestamp - message.createdTimestamp)} ms`)
        });
    }

    module.exports.help = {
        name: "ping", //Main commands trigger
        aliases: ["lag", "latency"] //Aliases
    }
```

### Resources

<img align="left" width="48px" alt="discord.js" href="https://discord.js.org/#/" src="https://discord.js.org/static/logo-square.png" />
<img align="left" width="48px" alt="node.js" href="https://nodejs.org/en/" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />