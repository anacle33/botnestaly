const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission Administrateur");
            message.delete();
            if(args[0] == "help"){
                message.reply("Usage: !news <votre news>");
                return;
            }
            let rUser = message.author;
            let raison = args.join(" ");
    
            message.reply("votre annonce a bien été envoyé")

            let reportschannel = message.guild.channels.find(`name`, "「🌍」annonce");
            if(!reportschannel) return message.channel.send("Je ne trouve pas le channel demande-de-rdv-admin");
            reportschannel.send(raison);
}

module.exports.help = {
  name: "news"
}
