const { EmbedBuilder } = require('discord.js')
const { setup } = require('./welcome')
const prefix = "t!";
module.exports = {
  setup(client) {
    client.on('messageCreate', async message => {
      if (message.author.bot) return;
      if (message.content.toLowerCase() == `${prefix}`) {
        message.reply(`My default prefix is ${prefix}`)
      }
      
    })
  }
}
