const { EmbedBuilder } = require("discord.js");
const prefix = "t!";
module.exports = {
  setup(client) {
    client.on("messageCreate", async (message) => {
      if (message.author.bot) return;
      if (message.content.toLowerCase() == `${prefix}user-info`) {
        const member = message.member;
        const userEmbed = new EmbedBuilder()
          .setColor("#94B1FF")
          .setTitle(`「 ✦ Information for @${member.user.username} ✦ 」 ๋࣭ ⭑⚝`)
          .setDescription(`**User ID**: ${member.user.id}`)
          .setThumbnail(
            "https://i.ibb.co.com/0m2rcv7/150-Cream-Unicorn-Cookie-s-Gallery-Cookie-Run-Kingdom-Wiki-Fandom-1.gif",
          )
          .addFields(
            {
              name: "Joined Discord since 𓂃 ࣪˖𖧧࣪ .",
              value: ` > <t:${parseInt(member.user.createdAt / 1000)}:R> | <t:${parseInt(member.user.createdAt / 1000)}:F>`,
              inline: false,
            },
            {
              name: "Joined server since 𓂃 ࣪˖𖧧࣪ .",
              value: ` > <t:${parseInt(member.joinedAt / 1000)}:R> | <t:${parseInt(member.joinedAt / 1000)}:F>`,
              inline: true,
            },
            {
              name: "Boost Server ˖ ࣪ . ࿐♡˚.",
              value: client.user.premiumSince ? " > Yes" : " > No",
              inline: false,
            },
          )
          .setTimestamp()
          .setFooter({
            text: ".ᐟ.ᐟ",
            iconURL: message.author.displayAvatarURL(),
          });
        message.reply({ embeds: [userEmbed] });
      }
    });
  },
};
