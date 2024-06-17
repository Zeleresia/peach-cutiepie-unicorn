const { Client, Partials, GatewayIntentBits, PermissionsBitField } = require('discord.js')
module.exports = {
      name: Discord.Events.MessageReactionAdd,
      once: false,
      async execute(reaction, user) {
    setup(client) {
        client.on('messageReactionAdd', async (reaction, user, channel) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();

            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id === '1251178620773335152') {
                if(reaction.emoji.id === '1252232207020589107') {
                    try {
                        await reaction.message.guild.members.cache.get(user.id).roles.add('1191032746349428788');
                    } catch (error) {
                        console.log(error.message);
                    }
                }
            }
        });
    }
}
