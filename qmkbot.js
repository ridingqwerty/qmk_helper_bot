const Discord = require('discord.js');
const logger = require('winston');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
const bot = new Discord.Client();
const config = require("./config.json");
const mySwitch = require("./docswitch.js");
//import { docsSwitch } from './docswitch.js';

/*
// HOW TO MODULARIZE THIS MONSTROSITY
const docsSwitch = (docs) => ({
  "newbs": "newbs",
  "setup": "newbs_getting_started",
  "building": "newbs_building_firmware",
  "flashing": "newbs_flashing",
  "testing": "newbs_testing_debugging",
  "debugging": "newbs_testing_debugging",
  "faq": "faq_general",
  "faq-build": "faq_build",
  "faq-debug": "faq_debug",
  "faq-keymap": "faq_keymap",
  "glossary": "reference_glossary",
  "configurator": "newbs_building_firmware_configurator",
  "api": "api_overview",
  "cli": "cli",
  "cli-configuration": "cli_configuration",
  "cli-commands": "cli_commands",
  "customizing": "custom_quantum_functions",
  "zadig": "driver_installation_zadig",
  "keymap": "keymap",
  "vagrant": "getting_started_vagrant",
  "flashing": "flashing",
  "flashing-bootloadhid": "flashing_bootloadhid",
  "ide-eclipse": "other_eclipse",
  "ide-vscode": "other_vscode",
  "git": "newbs_git_best_practices",
  "hand-wire": "hand_wire",
  "isp-flashing": "isp_flashing_guide",
  "keycodes": "keycodes",
  "keycodes-basic": "keycodes_basic",
  "keycodes-quantum": "quantum_keycodes",
  "keycodes-shifted": "keycodes_us_ansi_shifted",
  "keycodes-advanced": "feature_advanced_keycodes",
  "command": "feature_command",
  "dynamic-macros": "feature_dynamic_macros",
  "grave-escape": "feature_grave_esc",
  "leader": "feature_leader",
  "mod-tap": "mod_tap",
  "macros": "feature_macros",
  "mouse-keys": "feature_mouse_keys",
  "space-cadet": "feature_space_cadet",
  "auto-shift": "feature_auto_shift",
  "combos": "feature_combo",
  "debounce": "feature_debounce_type",
  "key-lock": "feature_key_lock",
  "layers": "feature_layers",
  "one-shot-keys": "one_shot_keys",
  "pointing-device": "feature_pointing_device",
  "swap-hands": "feature_swap_hands",
  "tap-dance": "feature_tap_dance",
  "tap-hold": "tap_hold",
  "terminal": "feature_terminal",
  "unicode": "feature_unicode",
  "userspace": "feature_userspace",
  "wpm": "feature_wpm",
  "lcd": "feature_hd44780",
  "oled": "feature_oled_driver",
  "backlight": "feature_backlight",
  "led-matrix": "feature_led_matrix",
  "rgblight": "feature_rgblight",
  "rgbmatrix": "feature_rgb_matrix",
  "audio": "feature_audio",
  "bluetooth": "feature_bluetooth",
  "bootmagic": "feature_bootmagic",
  "custom-matrix": "custom_matrix",
  "dip-switch": "feature_dip_switch",
  "encoders": "feature_encoders",
  "haptic-feedback": "feature_haptic_feedback",
  "ctpc": "proton_c_conversion",
  "ps2-mouse": "feature_ps2_mouse",
  "split-keyboard": "feature_split_keyboard",
  "stenography": "feature_stenography",
  "velocikey": "feature_velocikey",
  "mcus": "compatible_microcontrollers",
  "contributing": "contributing",
  "translating": "translating",
  "config-options": "config_options",
  "understanding-keyboards": "how_keyboards_work",
  "understanding-matrix": "how_a_matrix_works",
  "understanding-qmk": "understanding_qmk"
})[docs];
*/

var cooldown = [];

bot.on('ready', () => {
  // Timer
  setInterval(() => {
    logger.info('It has been one minute -- clearing cooldown buffer');
    cooldown = [];
  }, 60000); // Runs this every 10 seconds.
  // Bot ready splash
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.user.username + ' - (' + bot.user.id + ')');
  logger.info('------------------------');
});

let botChannel = undefined;

const joinChannel = (channel) => {
  channel.join().then(connection => {
    botChannel = channel;
    //playAudio(connection, 'AUDIO URL');
    playAudio(connection, './africa.mp3');
  });
}

const leaveChannel = () => {
  botChannel.leave();
  botChannel = undefined;
};

const playAudio = (connection, audioUrl) => {
  //const dispatcher = connection.playArbitraryInput(audioUrl);
  const dispatcher = connection.playFile(audioUrl);
  dispatcher.on("end", end => {
    leaveChannel();
  });
};

const prefix = "!";
bot.on('message', message => {
  // Bot ignores itself while it talks
  if(message.author.bot) return;

  // Debug info
  logger.info('Message:\t' + message.content);
  logger.info('------------------------');

  if (message.content.substring(0,1) == config.prefix) {

    // commands
    //var args = message.content.toLowerCase().substring(1).split(/ +/g);
    var args = message.content.toLowerCase().substring(1).replace(/!/g, '').split(/ +/g);
    var cmd = args[0];
    logger.info('CMD:\t' + cmd);

    args.forEach(function(item) {
      //doc = docsSwitch(item);
      doc = mySwitch.docsSwitch(item);
      if (typeof doc !== 'undefined') {

        if(message.channel.type === "dm") {
          //message.author.send("Sorry, can't talk now.");
          message.author.send('https://docs.qmk.fm/#/' + doc);
          return;
        };

        if ((message.member.roles.some(r=>["Directors", "Collaborators"].includes(r.name))) && !cooldown.includes(doc)) {
          message.channel.send('https://docs.qmk.fm/#/' + doc);
          cooldown.push(doc);
        } else {
          message.author.send('https://docs.qmk.fm/#/' + doc);
        }
      }
    });

    // switch statement here for help menu and links outside of docSwitch
    switch (cmd) {

      // "help" menu is always PM'd to reduce cluttering the channel
      case 'help':
        message.author.send({embed: {
          color: 3447003,
        fields: [{
            name: "for newbs",
            value: "!newbs !building !flashing !testing !debugging"
          },
          {
            name: "faqs",
            value: "!faq !faq-build !faq-debug !faq-keymap !glossary"
          },
          {
            name: "building, flashing, drivers",
            value: "!configurator !api !zadig !toolbox !flashing !flashing-bootloadhid !keymap !vagrant !ide-eclipse !ide-vscode !git !hand-wire !isp-flashing"
          },
          {
            name: "cli",
            value: "!cli !cli-configuration !cli-commands"
          },
          {
            name: "keycodes",
            value: "!keycodes !keycodes-basic !keycodes-quantum !keycodes-advanced"
          },
          {
            name: "advanced keycodes",
            value: "!command !dynamic-macros !grave-escape !leader !mod-tap !macros !mouse-keys !space-cadet !keycodes-shifted"
          },
          {
            name: "software features",
            value: "!auto-shift !combos !debounce !key-lock !layers !one-shot-keys !pointing-device !swap-hands !tap-dance !tap-hold !terminal !unicode !wpm"
          },
          {
            name: "hardware features",
            value: "displays: !lcd !oled\nlighting: !backlight !led-matrix !rgblight !rbgmatrix\n!audio !bluetooth !bootmagic !custom-matrix !dip-switch !encoders !haptic-feedback !ctpc !ps2-mouse !split-keyboard !stenography !velocikey"
          },
          {
            name: "others",
            value: "!mcus !contributing !translating !config-options !understanding-keyboards !understand-matrix !understanding-qmk"
          },
        ],
        }});
        break;

      case 'potato':
        message.author.send(':potato:');
        break;

      case 'toolbox':
        message.channel.send('https://github.com/qmk/qmk_toolbox');
        break;
    }
  }
});

bot.login(config.token);
