const Discord = require("discord.js");

const bot = new Discord.Client();

var prefix = "!";

bot.on('message', message => {
	let sender = message.author;
let args = message.content.slice(prefix.length).trim().split(" ");
    let cmds = args.shift().toLowerCase();

// Return Statements
    if (sender.bot) return;
    if (!message.content.startsWith(prefix)) return;
	try {
        let commandFile = require(`./commands/${cmds}.js`);
        commandFile.run(bot, message, args, prefix);
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(`${message.author.username} ran the command: ${cmds}`);
    }
});

bot.login(process.env.token);
