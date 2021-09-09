
// Initialize Discord Bot
const Discord = require('discord.js');
const bot = new Discord.Client();

// Include config
require('dotenv').config();
const token = process.env.TOKEN;

// Import utils.js
const {prefix, baseurl, msg, docsSwitch, authroles, parse, bare, firmware, toolbox, plainhelp, disclaimer, ohshitgit, git, xkcd, promicro, protonc, elitec, msys, coc, kbdfans, vid, vidq} = require("./utils.js");
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

    // Get user's nickname, or fall back to default username
    var nick = (message.member === null)? message.author.username : message.member.displayName; 

    args.forEach(function(item) {
      //doc = docsSwitch(item);
      //doc = docsSwitch(item).str.replace(/-/g, "");
      doc = docsSwitch(item);
      if (typeof doc !== 'undefined') {

	// construct docSwitch embed
	const docmsg = {
	  color: 0x344703,
	  fields: [
	    {
	      name: 'Try this:',
	      value: `${baseurl}${doc}`,
	    },
	  ],
	  footer: {
	    icon_url: `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.png?size=256`,
	    text: `${nick} invoked !${cmd}`,
	  }
	};

        if(channel.type === "dm") {
          //author.send(`${baseurl}${doc}`);
	  author.send({ embed: docmsg });
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
	  //channel.send(bare(`${baseurl}${doc}`));
	  channel.send({ embed: docmsg });
	  cooldown.push(doc);
	}

      }
    });

    const cmdmsg = new Discord.MessageEmbed()
      .setColor(0x344703)
      .setFooter(`${nick} invoked !${cmd}`, `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.png?size=256`);


    // switch statement here for help menu and links outside of docSwitch
    switch (cmd) {

      // PM plaintext help menu
      case 'help':
        //author.send(plainhelp);
        author.send(msg);
        //author.send(disclaimer);
        break;

      //case 'plain': // plaintext fallback
        //author.send(plainhelp);
        //break;

      case 'potato': // PM a potato
        author.send(':potato:');
        break;

      case 'ohshit': // send channel a link to https://ohshitgit.com/
        //channel.send(bare(ohshitgit));
	cmdmsg.addFields({ name: "Try this:", value: ohshitgit });
	channel.send(cmdmsg);
        break;

      case 'git': // send channel a link to QMK git best practices and xkcd #1597
        //channel.send(xkcd);
        //channel.send(bare(git));
	cmdmsg.setImage(xkcd);
	cmdmsg.addFields({ name: "Try this:", value: git });
	channel.send(cmdmsg);
        break;

      case 'conduct': // send channel a link to https://qmk.fm/coc/
        //channel.send(coc);
	cmdmsg.addFields({ name: "Review QMK Code of Conduct:", value: coc });
	channel.send(cmdmsg);
        break;

      case 'kbdfans':
        //channel.send(kbdfans);
	cmdmsg.addFields({ name: "Dear KBDFans users:", value: kbdfans });
	channel.send(cmdmsg);
	break;

      case 'lighting':
        //channel.send(?)
	cmdmsg.addFields(
	  { name: "Backlight:", value: 'Single color, per key, not individually addressable (all on or off)' },
	  { name: "RGBLight:", value: 'Underglow RBG, linear design (sinle chain), individually addressable' },
	  { name: "LED Matrix:", value: 'Single color, per key, individually addressable' },
	  { name: "RGB Matrix:", value: 'RGB, per key, individually addressable' },
	  { name: "Indicators:", value: 'Scroll/Caps/Num Lock LEDs' },
	)
	channel.send(cmdmsg);
	break;
      /*
	Backlight: Single color, per key, not individually addressable (all on or off)
	RGBLight: Underglow RGB, linear design (single chain), individually addressable
	LED Matrix: Single color, per key, individually addressable
	RGB Matrix: RGB, per key, individually addressable
	Indicators: Scroll/Caps/Num Lock LEDs
      */

      /*
      case 'promicro': // send channel image of pro micro pinout
        channel.send({files:[promicro]});
	break;
      */

      case 'promicro': // send channel image of pro micro pinout
	cmdmsg.setTitle("Pro Micro Pinout");
	cmdmsg.setImage(promicro);
	channel.send(cmdmsg);
	break;

      case 'protonc': // send channel image of proton c pinout
	cmdmsg.setTitle("Proton-C Pinout");
	cmdmsg.setImage(protonc);
	channel.send(cmdmsg);
        //channel.send({files:[protonc]});
	break;

      case 'elitec': // send channel image of elite c pinout
	cmdmsg.setTitle("Elite-C Pinout");
	cmdmsg.setImage(elitec);
	channel.send(cmdmsg);
        //channel.send({files:[elitec]});
	break;

      case 'toolbox': // send channel link to qmk_toolbox repo
        //channel.send(bare(toolbox));
	cmdmsg.addFields({ name: "Get QMK Toolbox here:", value: toolbox });
	channel.send(cmdmsg);
        break;

      case 'qmkfirmware': // send channel link to qmk_firmware repo
        //channel.send(bare(firmware));
	cmdmsg.addFields({ name:  "QMK Firmware repository:", value: firmware });
	channel.send(cmdmsg);
        break;

      case 'msys': // send channel link to msys page
        //channel.send(bare(msys));
	cmdmsg.addFields({ name:  "Get QMK MSYS here:", value: msys });
	channel.send(cmdmsg);
	break;
      
      case 'vid': // send channel link to USB usage page
        //channel.send(bare(vid));
	cmdmsg.addFields({ name:  "View USB usage page here", value: vid });
	channel.send(cmdmsg);
	break;

      case 'vidq': // send channel link to VID/PID query
        //channel.send(bare(vidq));
	cmdmsg.addFields({ name:  "Query VID/PID usage here:", value: vidq });
	channel.send(cmdmsg);
	break;
    }
  
    // Delete message
    setTimeout(() => message.delete().catch(err => console.log(err)), 100); // testing
  }
});

// Authenticate bot
bot.login(token);
