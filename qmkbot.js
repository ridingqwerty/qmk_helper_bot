
// Initialize Discord Bot
const Discord = require('discord.js');
const bot = new Discord.Client();

// Include utils and config
const config = require("./config.json");
const utils = require("./utils.js");

bot.on('ready', () => {
  // Reset cooldown every 30 seconds
  setInterval(() => {
    utils.cooldown = [];
  }, 30000);
});

bot.on('message', message => {
  // Bot ignores itself while it talks
  if(message.author.bot) return;

  // Input starts with '!'
  if (message.content.substring(0,1) == utils.prefix) {

    // Parse commands
    //var args = message.content.parse();
    var args = utils.parse(message.content);
    var cmd = args[0];

    args.forEach(function(item) {
      doc = utils.docsSwitch(item);
      if (typeof doc !== 'undefined') {

        if(message.channel.type === "dm") {
          message.author.send(utils.baseurl + doc);
          return;
        };

        if ((message.member.roles.some(r=>utils.authroles.includes(r.name))) && !utils.cooldown.includes(doc)) {
          message.channel.send(utils.baseurl + doc);
          utils.cooldown.push(doc);
        } else {
          message.author.send(utils.baseurl + doc);
        }
      }
    });

    // switch statement here for help menu and links outside of docSwitch
    switch (cmd) {

      // "help" menu is always PM'd to reduce cluttering the channel
      case 'help':
        // refactor me...
        message.author.send({embed: {
          color: utils.msg.color,
          author: { name: utils.msg.header },
          fields: utils.helpmessage,
          footer: { text: utils.msg.footer },
        }});
        break;

      case 'potato': // PM a potato
        message.author.send(':potato:');
        break;

      case 'toolbox': // Link to qmk_toolbox repo
        message.channel.send(utils.toolbox);
        break;

      case 'qmk-firmware': // Link to qmk_firmware repo
        message.channel.send(utils.firmware);
        break;
    }
  }
});

// Authenticate bot
bot.login(config.token);
