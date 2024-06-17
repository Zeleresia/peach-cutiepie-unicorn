const { EmbedBuilder } = require("discord.js");
const prefix = "t!";
module.exports = {
  setup(client) {
    client.on("messageCreate", async (message) => {
      if (message.author.bot) return;
      if (message.content.toLowerCase() == `${prefix}bot-info`) {
        const member = message.member;
        const userEmbed = new EmbedBuilder()
          .setColor("#94B1FF")
          .setTitle(`「 ✦ Here are my information!!! ✦ 」 ๋࣭ ⭑⚝`)
          .setDescription(`${client.user.username} | \`${client.user.id}\``)
          .setThumbnail(
            "https://i.ibb.co.com/QnYNtN2/157-Cream-Unicorn-Cookie-s-Gallery-Cookie-Run-Kingdom-Wiki-Fandom.gif",
          )
          .addFields(
            {
              name: "Joined Discord since",
              value: ` > <t:${parseInt(client.user.createdAt / 1000)}:R> | <t:${parseInt(client.user.createdAt / 1000)}:F>`,
              inline: false,
            },
            {
              name: "Code Language",
              value: `<:javascript:1252184581801771068> JavaScript`,
              inline: true,
            },
            {
              name: "Discord API",
              value: `> <:djs:1252185850217893899> \`discord.js 14.15.3\``,
              inline: true,
            },
            {
              name: "Coded by",
              value: `> zelemarsh7mary \`with ❤️\``,
              inline: true,
            },
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
