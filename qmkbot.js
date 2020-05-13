
// Initialize Discord Bot
const Discord = require('discord.js');
const bot = new Discord.Client();

// Include config
require('dotenv').config();
const token = process.env.TOKEN;

// Import utils.js
const {prefix, baseurl, msg, docsSwitch, authroles, parse, bare, firmware, toolbox, plainhelp, disclaimer, ohshitgit} = require("./utils.js");
let cooldown = require("./utils.js").cooldown;

bot.on('ready', () => {
  // Reset cooldown every 30 seconds
  setInterval(() => {
    cooldown = [];
  }, 30000);
});

//const sender = { message, author };

bot.on('message', message => {

  // Destructure discord.js elements
  const { content, author, channel, member} = message;

  // Bot ignores itself while it talks
  if(author.bot) return;

  // Input starts with '!'
  if (content.startsWith(prefix)) {

    // Parse commands
    var args = parse(content);
    var cmd = args[0];

    args.forEach(function(item) {
      doc = docsSwitch(item);
      if (typeof doc !== 'undefined') {

        if(channel.type === "dm") {
          author.send(`${baseurl}${doc}`);
          return;
        };

        if ((member.roles.some(r=>authroles.includes(r.name))) && !cooldown.includes(doc)) {
          channel.send(bare(`${baseurl}${doc}`));
          cooldown.push(doc);
        } else {
          author.send(`${baseurl}${doc}`);
        }
      }
    });

    // switch statement here for help menu and links outside of docSwitch
    switch (cmd) {


      // PM plaintext help menu
      case 'help':
        author.send(plainhelp);
        //author.send(msg);
        //author.send(disclaimer);
        break;

      //case 'plain': // plaintext fallback
        //author.send(plainhelp);
        //break;

      case 'potato': // PM a potato
        author.send(':potato:');
        break;

      case 'ohshit': // PM a link to https://ohshitgit.com/
        author.send(ohshitgit);
        break;

      /*
      case 'toolbox': // Link to qmk_toolbox repo
        channel.send(bare(toolbox));
        break;

      case 'qmk-firmware': // Link to qmk_firmware repo
        channel.send(bare(firmware));
        break;
      */
    }
  }
});

// Authenticate bot
bot.login(token);
