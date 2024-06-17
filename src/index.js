const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  IntentsBitField,
  ActivityType,
  Partials,
} = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");
const config = require(`${process.cwd()}/config.json`);
const { once } = require("events");
const fs = require("fs");
const keepAlive = require("./server.js");
keepAlive();


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [
    Partials.User,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Message,
    Partials.Reaction,
    Partials.GuildScheduledEvent,
    Partials.ThreadMember
  ],
});
/*Intens*/
const myIntents = new IntentsBitField();
myIntents.add(
  IntentsBitField.Flags.GuildPresences,
  IntentsBitField.Flags.GuildMembers,
);
const otherIntents = new IntentsBitField([
  IntentsBitField.Flags.Guilds,
  IntentsBitField.Flags.DirectMessages,
]);
otherIntents.remove([IntentsBitField.Flags.DirectMessages]);
/*Console Log if the bot is awake & Rich Present*/
client.once("ready", async () => {
  console.log("Bot is Online!");
  await joinVC(client, config);
  client.user.setActivity("t!help", { type: ActivityType.Playing });
  const status = client.user.setActivity({
    type: ActivityType.Custom,
    name: "customstatus",
    state: "t!help · 💖 mainly made for Madonna Lily",
  });
});

/*HELP command*/
const prefix = "t!";
client.on("messageCreate", (message) => {
  if (message.content == `${prefix}help`) {
    const embed = new EmbedBuilder()
      .setColor("#94B1FF")
      .setTitle("「 ✦ Help ✦ 」")
      .setDescription("All commands:")
      .setThumbnail(
        "https://i.ibb.co.com/94dkFZZ/150-Cream-Unicorn-Cookie-s-Gallery-Cookie-Run-Kingdom-Wiki-Fandom.gif",
      )
      .addFields(
        {
          name: "• `user-info`",
          value: "Provides general information about user ⭑.ᐟ",
          inline: false,
        },
        {
          name: "• `bot-info`",
          value: "Provides information about this bot ⭑.ᐟ",
          inline: false,
        },
        {
          name: "• `server-info`",
          value: "Provides general information about this server ⭑.ᐟ",
          inline: false,
        },
      )
      .setTimestamp()
      .setFooter({
        text: "information about `help` command ₊ ⊹",
        iconURL: message.author.displayAvatarURL(),
      });
    message.reply({ embeds: [embed] });
  }
});

/*FS Utility*/
const commandsFolder = "./commands";
const commandFiles = fs
  .readdirSync(commandsFolder)
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  if (command.setup) {
    // Check if the setup function exists
    command.setup(client);
  }
}
/*VOICE Make the bot Join the Voice Chat as long as it is alive*/
client.on("voiceStateUpdate", async (oldState, newState) => {
  const oldVoice = oldState.channelId;
  const newVoice = newState.channelId;

  if (oldVoice !== newVoice) {
    if (!oldVoice) {
    } else if (!newVoice) {
      if (oldState.member.id !== client.user.id) return;
      await joinVC(client, config);
    } else {
      if (oldState.member.id !== client.user.id) return;
      if (newVoice !== config.Channel) {
        await joinVC(client, config);
      }
    }
  }
});
async function joinVC(client, config) {
  const guild = client.guilds.cache.get(config.Guild);
  const voiceChannel = guild.channels.cache.get(config.Channel);
  const connection = joinVoiceChannel({
    channelId: voiceChannel.id,
    guildId: guild.id,
    adapterCreator: guild.voiceAdapterCreator,
    selfDeaf: true,
    selfMute: true,
  });
}
/*TOKEN goes ENV*/
client.login(process.env.TOKEN);
