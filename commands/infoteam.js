const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  message.reply(`Voici les informations de la team : 

Nous sommes une team fortnite crée depuis janvier 2019. Cette team est faite pour s'améliorer au maximum ! 
Pour entrer dans la team, aller faire une demande de rendez-vous dans le salon <#574873322890723338> , 
puis vous aurez une convocation avec les personnes du staff pour vous testez ! 
Si vous avez des questions par rapport à cela, demander aux Administrateurs ou le Fondateur  !

De plus, n'hésitez pas à publier le serveur en masse pour jouer tous ensemble que se soit ami ou avec la team !
Voici le lien : https://discord.gg/epSgNPj

Pour plus de questions, contactez le staff !`)
}

module.exports.help = {
  name: "infoteam"
}
