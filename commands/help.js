const Discord = require("discord.js")

module.exports = {
    run: async (client, message) => { 

   const args = message.content.split(" ").slice(1)

   let helpEmbed = new Discord.MessageEmbed()
   .setTitle(`HELP COMMAND`)
   .setDescription(`**HEY THERE ! HI ${message.author} . I Am Alt Detector Bot Made By __ItzCutePichu#0001__ !! I Am Fully Customisable Bot And A Very Usefull Bot , Ty For Using Me . My Work Is To Notfiy The Server If Any Alt Enters The Server , To AutoSetup Me Do \`a!autosetup\`**`)
   .setFooter(`BOT MADE BY ItzCutePichu#0001`)
   .addField(`**__BOT COMMANDS__**`, '`a!ping` : **To Check The Bot Ping** \n `a!autosetup` : **To AutoSetup The Bot** \n `a!config` : **To Set The Bot\'s Config**')
   .setColor('RANDOM')

   let AutoSetupEmbed = new Discord.MessageEmbed()
   .setTitle('AUTOSETUP HELP')
   .setDescription(`**\`a!autosetup\` Command Will AutoSetup The Bot Alt LoggingChannel And NotifyRole And Will AutoSetup The Bot \n\n Usage(s) : \`a!autosetup\` , \`a!auto-setup\`**`)
   .setFooter(`BOT MADE BY ItzCutePichu#0001`)
   .setColor('RANDOM')

   let configEmbed = new Discord.MessageEmbed()
   .setTitle('CONFIG HELP')
   .setDescription(`**\`a!config\` Command Is A Manual Command For Setting Alt LoggingChannel And Alt NotifyRole \n\n Usage(s) : \n \`a!config loggingChannel #channel\` \n \`a!config notifyRole @role\` \n\n __EXAMPLES__ \n \`a!config loggingChannel #alt-notification\` \n \`a!config notifyRole @alt-notify\`**`)

        if(args[0] === "autosetup"){
            args.shift()
            message.channel.send(AutoSetupEmbed)
          }
          
          else if(args[0] === "config"){
            args.shift()
            message.channel.send(configEmbed)
            }
            
            else message.channel.send(helpEmbed)
          }
        }
module.exports.help = {
    name: "help",
    aliases: ['help'],
    description: "help command"
  }
    
