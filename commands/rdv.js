const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Usage: !rdv <présentation de vous et lettre de motivation>");
      return;
    }
    let rUser = message.author;
    let raison = args.join(" ");
    
    message.reply("votre demande a bien été soumise, on vous recontactera pour avoir un horaire pour passer les tests")

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Demande RDV")
    .setColor("#E43333")
    .addField("Demande de rdv par l'utilisateur ", `${rUser} ID: ${rUser.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Présentation et motivation", raison);

    let reportschannel = message.guild.channels.find(`name`, "demande-de-rdv-admin");
    if(!reportschannel) return message.channel.send("Je ne trouve pas le channel demande-de-rdv-admin");
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
