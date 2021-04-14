
// Initialize Discord Bot
const Discord = require('discord.js');
const bot = new Discord.Client();

// Include config
require('dotenv').config();
const token = process.env.TOKEN;

// Import utils.js
const {prefix, baseurl, msg, docsSwitch, authroles, parse, bare, firmware, toolbox, plainhelp, disclaimer, ohshitgit, git, xkcd, promicro, protonc, elitec, msys, coc, vid, vidq} = require("./utils.js");
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
  const { content, author, channel, member, id} = message;

  // Bot ignores itself while it talks
  if(author.bot) return;

  // Sanitize hyphens
  input = content.split('-').join('');

  // Input starts with '!'
  if (input.startsWith(prefix)) {

    // Parse commands
    var args = parse(input);
    var cmd = args[0];

    args.forEach(function(item) {
      //doc = docsSwitch(item);
      //doc = docsSwitch(item).str.replace(/-/g, "");
      doc = docsSwitch(item);
      if (typeof doc !== 'undefined') {

        if(channel.type === "dm") {
          author.send(`${baseurl}${doc}`);
          return;
        };

	// commented out -- doc commands are being opened up to all members
	/*
        if ((member.roles.some(r=>authroles.includes(r.name))) && !cooldown.includes(doc)) {
          channel.send(bare(`${baseurl}${doc}`));
          cooldown.push(doc);
        } else {
          author.send(`${baseurl}${doc}`);
        }
	*/

	// enforce 30 second cooldown on docs sent to channel
	if (!cooldown.includes(doc)) {
	  channel.send(bare(`${baseurl}${doc}`));
	  cooldown.push(doc);
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

      case 'ohshit': // send channel a link to https://ohshitgit.com/
        channel.send(bare(ohshitgit));
        break;

      case 'git': // send channel a link to QMK git best practices and xkcd #1597
        channel.send(xkcd);
        channel.send(bare(git));
        break;

      case 'conduct': // send channel a link to https://qmk.fm/coc/
        channel.send(coc);
        break;

      case 'promicro': // send channel image of pro micro pinout
        channel.send({files:[promicro]});
	break;

      case 'protonc': // send channel image of proton c pinout
        channel.send({files:[protonc]});
	break;

      case 'elitec': // send channel image of elite c pinout
        channel.send({files:[elitec]});
	break;

      case 'toolbox': // send channel link to qmk_toolbox repo
        channel.send(bare(toolbox));
        break;

      case 'qmkfirmware': // send channel link to qmk_firmware repo
        channel.send(bare(firmware));
        break;

      case 'msys': // send channel link to msys page
        channel.send(bare(msys));
	break;
      
      case 'vid': // send channel link to USB usage page
        channel.send(bare(vid));
	break;

      case 'vidq': // send channel link to VID/PID query
        channel.send(bare(vidq));
	break;
    }
  
    // Delete message
    setTimeout(() => message.delete().catch(err => console.log(err)), 100); // testing
  }
});

// Authenticate bot
bot.login(token);
