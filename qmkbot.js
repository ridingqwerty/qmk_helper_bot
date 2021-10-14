// Initialize Discord Bot
const Discord = require('discord.js');
const bot = new Discord.Client();

// Include config
require('dotenv').config();
const token = process.env.TOKEN;

// Import utils.js
const {prefix, baseurl, msg, docsSwitch, authroles, parse, bare, firmware, toolbox, plainhelp, disclaimer, ohshitgit, git, xkcd, promicro, protonc, elitec, blackpill, bluepill, msys, coc, kbdfans, lighting, vid, vidq, automark, markdown, checkrole, sonixinvite, sonix, openrgbinvite, openrgb, vialinvite, vial, iconfrominvite, inputlanguage, standards, snip} = require('./utils.js');
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
        // author.send(plainhelp);
        if (channel.name === 'bot-spam') {  // allow help in #bot-spam
          channel.send(msg);
        } else {
          author.send(msg);
          // author.send(disclaimer);
        }
        break;

        // case 'plain': // plaintext fallback
        // author.send(plainhelp);
        // break;

      case 'potato':  // PM a potato
        author.send(':potato:');
        break;

      case 'ohshit':  // send channel a link to https://ohshitgit.com/
                      // channel.send(bare(ohshitgit));
        cmdmsg.addFields({name: 'Try this:', value: ohshitgit});
        channel.send(cmdmsg);
        break;

      case 'git':  // send channel a link to QMK git best practices and xkcd
                   // #1597
                   // channel.send(xkcd);
        // channel.send(bare(git));
        cmdmsg.setImage(xkcd);
        cmdmsg.addFields({name: 'Try this:', value: git});
        channel.send(cmdmsg);
        break;

      case 'conduct':  // send channel a link to https://qmk.fm/coc/
                       // channel.send(coc);
        cmdmsg.addFields({name: 'Review QMK Code of Conduct:', value: coc});
        channel.send(cmdmsg);
        break;

      case 'kbdfans':
        // channel.send(kbdfans);
        cmdmsg.addFields({name: 'Dear KBDFans users:', value: kbdfans});
        channel.send(cmdmsg);
        break;
      case 'sonix':
        // channel.send('Sonix:\n' + sonix + bare(sonixinvite));
        iconfrominvite(bot, sonixinvite)
            .then(icon => {
              cmdmsg.setAuthor('Sonix', icon);
              cmdmsg.addFields(
                  {name: 'Information:', value: sonix + bare(sonixinvite)});
              channel.send(cmdmsg);
            })
            .catch(err => console.log(err));
        break;
      case 'openrgb':
        // channel.send('OpenRGB:\n' + openrgb + bare(openrgbinvite));
        iconfrominvite(bot, openrgbinvite)
            .then(icon => {
              cmdmsg.setAuthor('OpenRGB', icon);
              cmdmsg.addFields(
                  {name: 'Information:', value: openrgb + bare(openrgbinvite)});
              channel.send(cmdmsg);
            })
            .catch(err => console.log(err));
        break;
      case 'vial':
        // channel.send('Vial:\n' + vial + bare(openrgbinvite));
        iconfrominvite(bot, vialinvite)
            .then(icon => {
              cmdmsg.setAuthor('Vial', icon);
              cmdmsg.addFields(
                  {name: 'Information:', value: vial + bare(vialinvite)});
              channel.send(cmdmsg);
            })
            .catch(err => console.log(err));
        break;

      case 'lighting':
        // channel.send(lighting);
        cmdmsg.addFields({name: 'Lighting options', value: lighting});
        channel.send(cmdmsg);
        break;

        /*
        case 'promicro': // send channel image of pro micro pinout
          channel.send({files:[promicro]});
          break;
        */

      case 'promicro':  // send channel image of pro micro pinout
        cmdmsg.setTitle('Pro Micro Pinout');
        cmdmsg.setImage(promicro);
        channel.send(cmdmsg);
        break;

      case 'protonc':  // send channel image of proton c pinout
        cmdmsg.setTitle('Proton-C Pinout');
        cmdmsg.setImage(protonc);
        channel.send(cmdmsg);
        // channel.send({files:[protonc]});
        break;

      case 'elitec':  // send channel image of elite c pinout
        cmdmsg.setTitle('Elite-C Pinout');
        cmdmsg.setImage(elitec);
        channel.send(cmdmsg);
        // channel.send({files:[elitec]});
        break;
      case 'blackpill':  // send channel image of blackpill pinout
        cmdmsg.setTitle('Black Pill F4x1 Pinout');
        cmdmsg.setImage(blackpill);
        channel.send(cmdmsg);
        // channel.send({files:[blackpill});
        break;
      case 'bluepill':  // send channel image of bluepill pinout
        cmdmsg.setTitle('Blue Pill F103 Pinout');
        cmdmsg.setImage(bluepill);
        channel.send(cmdmsg);
        // channel.send({files:[bluepill});
        break;
      case 'toolbox':  // send channel link to qmk_toolbox repo
                       // channel.send(bare(toolbox));
        cmdmsg.addFields({name: 'Get QMK Toolbox here:', value: toolbox});
        channel.send(cmdmsg);
        break;

      case 'qmkfirmware':  // send channel link to qmk_firmware repo
                           // channel.send(bare(firmware));
        cmdmsg.addFields({name: 'QMK Firmware repository:', value: firmware});
        channel.send(cmdmsg);
        break;

      case 'msys':  // send channel link to msys page
                    // channel.send(bare(msys));
        cmdmsg.addFields({name: 'Get QMK MSYS here:', value: msys});
        channel.send(cmdmsg);
        break;

      case 'vid':  // send channel link to USB usage page
                   // channel.send(bare(vid));
        cmdmsg.addFields({name: 'View USB usage page here', value: vid});
        channel.send(cmdmsg);
        break;

      case 'vidq':  // send channel link to VID/PID query
                    // channel.send(bare(vidq));
        cmdmsg.addFields({name: 'Query VID/PID usage here:', value: vidq});
        channel.send(cmdmsg);
        break;

      case 'mdlast':  // automatically markdown previous message
        if (channel.type !== 'dm' && checkrole(member, authroles)) {
          message.channel.messages.fetch({limit: 2}).then(messages => {
            var language = 'c';
            if (args.length === 2) {
              language = args[1];
            }
            var lastmsg = messages.last();
            var authornick = (lastmsg.member === null) ? lastmsg.author.username : lastmsg.member.displayName;
            var constructedmsg = automark(lastmsg.content, language, authornick, nick);
            if (constructedmsg.length <= 2000) {
              channel.send(constructedmsg);
            } else {
              var buf = Buffer.from(constructedmsg.substring(4 + language.length, constructedmsg.length - (3)));
              var file = new Discord.MessageAttachment(buf, 'msg.' + language);
              channel.send(file);
            };
          })
        }
        break;

      case 'markdown':  // explain discord markdown
        //channel.send(markdown);
        cmdmsg.addFields({name: 'How to markdown code.\n', value: markdown});
        channel.send(cmdmsg);
        break;

      case 'inputlanguage':  // explain discord markdown
        //channel.send(inputlanguage);
        cmdmsg.addFields({name: 'Input Language\n', value: inputlanguage});
        channel.send(cmdmsg);
        break;

      case 'standards':  // send xkcd standards
        //channel.send(standards);
        cmdmsg.setImage(standards);
        channel.send(cmdmsg);
        break;
      
      case 'snip':  // send xkcd standards
        //channel.send(snip);
        cmdmsg.setImage(snip);
        channel.send(cmdmsg);
        break;
    }  // switch (cmd)

    // Delete message
    setTimeout(() => message.delete().catch(err => console.log(err)), 100); // testing
  }
});

// Authenticate bot
bot.login(token);
