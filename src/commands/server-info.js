const { EmbedBuilder } = require("discord.js");
const prefix = "t!";
module.exports = {
  setup(client) {
    client.on("messageCreate", async (message) => {
      if (message.author.bot) return;
      if (message.content.toLowerCase() == `${prefix}server-info`) {
        const member = message.member;
        const userEmbed = new EmbedBuilder()
          .setColor("#94B1FF")
          .setTitle(`「 ✦ Coming Soon!!! ✦ 」 ๋࣭ ⭑⚝`)
          .setDescription(`Zele will finish this page as soon as possible! :D`)
          .setThumbnail(
            "https://i.ibb.co.com/rwp8q9k/162-Cream-Unicorn-Cookie-s-Gallery-Cookie-Run-Kingdom-Wiki-Fandom.gif",
          )
          .setTimestamp()
          .setFooter({
            text: "𓍯𓂃 ──── ✦.ᐟ",
            iconURL: message.author.displayAvatarURL(),
          });
        message.reply({ embeds: [userEmbed] });
      }
    });
  },
};
