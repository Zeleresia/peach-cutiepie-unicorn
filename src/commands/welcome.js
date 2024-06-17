const { Client, EmbedBuilder, GatewayIntentBits } = require("discord.js");
module.exports = {
  setup(client) {
    client.on("guildMemberAdd", async (member) => {
      const welcomeEmbed = new EmbedBuilder()
        .setColor("#0099ff")
        .setTitle(`${member.user.username} has joined`)
        .setDescription(`**・*₊*˚ **welcome to **Madonna Lily** Discord server **!*!***
**__get started!__**
 > <#1251140675345322075> a guide tour !~
 > <#1251168164465737728> tell more abt yourself!
 > <#1249628929753616494> **a must read bəˈfôr chatting!**

__**gr for yourself!**__ 
> <#1251161343269015705>
> <#1249622164345196710>
> <#1249629017796251649>
*__i hope u make good friends here!!__* ⸝⸝ ⸝⸝ ⸝`)
        .setThumbnail('https://i.ibb.co.com/PQvjNTN/latest-Cream-Unicorn-Cookie-s-Costumes-Cookie-Run-Kingdom-Wiki-Fandom.gif')
      .setTimestamp()
      const channel = member.guild.channels.cache.get(
        process.env.WELCOME_CHANNEL,
      );
      await channel.send({embeds: [welcomeEmbed]})

    });
    
  },
};
