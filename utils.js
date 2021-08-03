
// Help message content
const anchor = 'https://docs.qmk.fm/#/'
const newUsersTopics =  [
  // 'testing' and 'debugging' link to the same thing...remove one?
  ['tutorial', 'newbs', 'New users should start here'],
  ['syllabus', 'syllabus', 'Structured overview of topics from beginner to advanced'],
  ['building', 'newbs_building_firmware', 'Build your first firmware'],
  ['flashing', 'newbs_flashing', 'How to flash firmware to your keyboard'],
  // test?
  ['testing', 'faq_misc?id=testing', 'Testing your keyboard'],
  ['debugging', 'faq_misc?id=debugging', 'Debugging your keyboard'],
];

const faqTopics = [
  ['faq', 'faq_general', 'Frequently asked questions about QMK'],
  ['faq-build', 'faq_build', 'Frequently asked questions about building QMK Firmware'],
  ['faq-debug', 'faq_debug', 'Frequently asked questions about troubleshooting QMK Firmware'],
  ['faq-keymap', 'faq_keymap', 'Frequently asked questions about QMK keymaps'],
  ['glossary', 'reference_glossary', 'Glossary of QMK terms'],
];

// INCOMPLETE
const buildingTopics = [ // Will have to break out the VID and MCU stuff
  //value: "configurator, api, zadig, toolbox, flashing, flashing-bootloadhid, keymap, vagrant, ide-eclipse, ide-vscode, git, hand-wire, isp-flashing, msys, vid, vidq, promicro, protonc, elitec"
  ['configurator', 'newbs_building_firware_configurator', 'Using the QMK Online Configurator to build firmware'],
  ['api', 'api_overview', 'Resources for QMK API'],
  ['zadig', 'driver_installation_zadig', 'Configure drivers for QMK using Zadig utility'],
  //['toolbox', '', ''],
  ['flashing', 'flashing', 'Flashing instructions'],
  ['flashing-bootloadhid', 'flashing_bootloadhid', 'BootloadHID flashing and bootloader instructions'],
  ['keymap', 'keymap', 'Keymap overview'],
  ['vagrant', 'getting_started_vagrant', 'Vagrant quick start guide'],
  ['docker', 'getting_started_docker', 'Docker quick start guide'],
  ['ide-eclipse', 'other_eclipse', 'Setting up Eclipse for QMK development'],
  ['ide-vscode', 'other_vscode', 'Setting up Visual Studio Code for QMK development'],
  ['git', 'newbs_git_best_practices', 'Best practices for using git with QMK'],
  ['hand-wire', 'hand_wire', 'Hand-wiring guide'],
  ['isp-flashing', 'isp_flashing_guide', 'ISP flashing guide'],
  //['msys', '', ''],
  //['vid', '', ''],
  //['vidq', '', ''],
  //['promicro', '', ''],
  //['protonc', '', ''],
  //['elitec', '', ''],
];

const cliTopics = [
  ['cli', 'cli', 'QMK CLI overview'],
  ['cli-configuration', 'cli_configuration', 'How to configure QMK CLI'],
  ['cli-commands', 'cli_commands', 'Overview of QMK CLI commands'],
];

const keycodesTopics = [
  ['keycodes', 'keycodes', 'List of all QMK keycodes'],
  ['keycodes-basic', 'keycodes_basic', 'List of basic keycodes'],
  ['keycodes-quantum', 'quantum_keycodes', 'List of quantum keycodes'],
  ['keycodes-advanced', 'feature_advanced_keycodes', 'List of advanced keycodes'],
  ['keycodes-shifted', 'keycodes_us_ansi_shifted', 'List of shifted keycodes'],
];

const advKeycodesTopics = [
  ['command', 'feature_command', 'Usage of QMK "Magic" commands'],
  ['dynamic-macros', 'feature_dynamic_macros', 'Using dynamically recorded macros'],
  ['grave-escape', 'feature_grave_esc', 'Usage of grave-escape keycode'],
  ['leader', 'feature_leader', 'Usage of the LEADER feature'],
  ['mod-tap', 'mod_tap', 'Usage of mod-tap keys'],
  ['macros', 'feature_macros', 'Usage of custom macros'],
  ['mouse-keys', 'feature_mouse_keys', 'Usage of Mouse Keys'],
  ['space-cadet', 'feature_space_cadet', 'Using the Space Cadet keys'],
  ['tap-dance', 'feature_tap_dance', 'Using the Tap Dance feature'],
  ['one-shot-keys', 'one_shot_keys', 'Press once to activate layer or modifier for next keypress'],
];

const softwareTopics = [
  ['auto-shift', 'feature_auto_shift', 'Automatically shift keys when held for specified amount of time'],
  ['combos', 'feature_combo', 'Chord multiple keys simultaneously to produce another'],
  ['debounce', 'feature_debounce_type', 'Explanation of the debounce algorithms used by QMK'],
  ['key-lock', 'feature_key_lock', 'Use Key-Lock to keep keys registered'],
  ['layers', 'feature_layers', 'Explanation of layers'],
  ['pointing-device', 'feature_pointing_device', 'Using pointing devices with QMK'],
  ['swap-hands', 'feature_swap_hands', 'Using Swap Hands'],
  ['tap-hold', 'tap_hold', 'Tap-hold configuration options'],
  ['terminal', 'feature_terminal', 'Using the Terminal feature'],
  ['unicode', 'feature_unicode', 'Cnfigure your keyboard and computer for Unicode characters'],
  ['wpm', 'feature_wpm', 'Word per minute calculation'],
];

// INCOMPLETE
const hardwareTopics = [
// value: "*Displays:* lcd, oled\n*Lighting:* backlight, led-matrix, rgblight, rgbmatrix\naudio, bluetooth, bootmagic, custom-matrix, dip-switch, encoders, haptic-feedback, ctpc, ps2-mouse, split-keyboard, stenography, velocikey"
  ['lcd', '', ''],
  ['oled', '', ''],
  ['backlight', '', ''],
  ['led-matrix', '', ''],
  ['rgblight', '', ''],
  ['rgbmatrix', '', ''],
  ['audio', '', ''],
  ['bluetooth', '', ''],
  ['bootmagic', '', ''],
  ['custom-matrix', '', ''],
  ['dip-switch', '', ''],
  ['encoders', '', ''],
  ['haptic-feedback', '', ''],
  ['ctpc', '', ''],
  ['ps2-mouse', '', ''],
  ['split-keyboard', '', ''],
  ['stenography', '', ''],
  ['velocikey', '', ''],
];

// INCOMPLETE
const otherTopics = [ /* PROBLEMS: conduct */
// value: "mcus, contributing, translating, config-options, understanding-keyboards, understanding-matrix, understanding-qmk, conduct"
  ['mcus', '', ''],
  ['contributing', '', ''],
  ['translating', '', ''],
  ['config-options', '', ''],
  ['understanding-keyboards', '', ''],
  ['understanding-matrix', '', ''],
  ['understanding-qmk', '', ''],
  ['conduct', '', ''],
];



// this series of instructions works to convert the newuserstopics array into hyperlinks with hovertext
// need to create a generic function to do this conversion when passing an arbitrary topics array
/*
var newuserstopicsarray = []
newuserstopics.forEach(item => newuserstopicsarray.push(`[${item[0]}](${anchor}${item[1]} "${item[2]}")`))
newuserstopicsstring = newuserstopicsarray.join(', ')
*/

function formatTopics(topics) {
  var topicsArray = [];
  topics.forEach(item => topicsArray.push(`[${item[0]}](${anchor}${item[1]} "${item[2]}")`));
  return topicsArray.join(', ');
};

// Help message content
const helpmessage =  [
  {
    name: "**New Users**",
    value: formatTopics(newUsersTopics)
  },

  {
    name: "**FAQs**",
    //value: "faq, faq-build, faq-debug, faq-keymap, glossary"
    value: formatTopics(faqTopics)
  },

  {
    // has non documentation links -- msys, vid, vidq, promicro, protonc, elitec
    name: "**Building, Flashing, Drivers**",
    value: "configurator, api, zadig, toolbox, flashing, flashing-bootloadhid, keymap, vagrant, ide-eclipse, ide-vscode, git, hand-wire, isp-flashing, msys, vid, vidq, promicro, protonc, elitec"
  },
  {
    name: "**QMK CLI**",
    //value: "cli, cli-configuration, cli-commands"
    value: formatTopics(cliTopics)
  },
  {
    name: "**Keycodes**",
    //value: "keycodes, keycodes-basic, keycodes-quantum, keycodes-advanced, keycodes-shifted"
    value: formatTopics(keycodesTopics)
  },
  {
    name: "**Advanced Keycodes**",
    //value: "command, dynamic-macros, grave-escape, leader, mod-tap, macros, mouse-keys, space-cadet, keycodes-shifted"
    value: formatTopics(advKeycodesTopics)
  },
  {
    name: "**Software Features**",
    value: "auto-shift, combos, debounce, key-lock, layers, one-shot-keys, pointing-device, swap-hands, tap-dance, tap-hold, terminal, unicode, wpm"
    //value: formatTopics(softwareTopics)
  },
  {
    name: "**Hardware Features**",
    value: "*Displays:* lcd, oled\n*Lighting:* backlight, led-matrix, rgblight, rgbmatrix\naudio, bluetooth, bootmagic, custom-matrix, dip-switch, encoders, haptic-feedback, ctpc, ps2-mouse, split-keyboard, stenography, velocikey"
  },
  {
    name: "**Other Information**",
    value: "mcus, contributing, translating, config-options, understanding-keyboards, understanding-matrix, understanding-qmk, conduct"
  }];

// Construct plaintext help menu fallback
var array = [];
for (const [key, value] of helpmessage.entries()) {
  array.push(`${helpmessage[key].name}\n${helpmessage[key].value}\n`);
}
plaintext = array.join("\n");


module.exports = {

  // Object Literal alternative to switch/if-else mess
  docsSwitch: (docs) => ({
    "docs": "",
    "newbs": "newbs",
    "tutorial": "newbs",
    "setup": "newbs_getting_started",
    "syllabus": "syllabus",
    "building": "newbs_building_firmware",
    "flashing": "newbs_flashing",
    "testing": "newbs_testing_debugging",
    "debugging": "newbs_testing_debugging",
    "faq": "faq_general",
    "faqbuild": "faq_build",
    "faqdebug": "faq_debug",
    "faqkeymap": "faq_keymap",
    "glossary": "reference_glossary",
    "configurator": "newbs_building_firmware_configurator",
    "api": "api_overview",
    "cli": "cli",
    "cliconfiguration": "cli_configuration",
    "clicommands": "cli_commands",
    "customizing": "custom_quantum_functions",
    "zadig": "driver_installation_zadig",
    "keymap": "keymap",
    "vagrant": "getting_started_vagrant",
    "docker": "getting_started_docker",
    "flashing": "flashing",
    "flashingbootloadhid": "flashing_bootloadhid",
    "ideeclipse": "other_eclipse",
    "idevscode": "other_vscode",
    "handwire": "hand_wire",
    "ispflashing": "isp_flashing_guide",
    "keycodes": "keycodes",
    "keycodesbasic": "keycodes_basic",
    "keycodesquantum": "quantum_keycodes",
    "keycodesshifted": "keycodes_us_ansi_shifted",
    "keycodesadvanced": "feature_advanced_keycodes",
    "command": "feature_command",
    "dynamicmacros": "feature_dynamic_macros",
    "graveescape": "feature_grave_esc",
    "leader": "feature_leader",
    "modtap": "mod_tap",
    "macros": "feature_macros",
    "mousekeys": "feature_mouse_keys",
    "spacecadet": "feature_space_cadet",
    "autoshift": "feature_auto_shift",
    "combos": "feature_combo",
    "debounce": "feature_debounce_type",
    "keylock": "feature_key_lock",
    "layers": "feature_layers",
    "oneshotkeys": "one_shot_keys",
    "pointingdevice": "feature_pointing_device",
    "swaphands": "feature_swap_hands",
    "tapdance": "feature_tap_dance",
    "taphold": "tap_hold",
    "terminal": "feature_terminal",
    "unicode": "feature_unicode",
    "userspace": "feature_userspace",
    "wpm": "feature_wpm",
    "lcd": "feature_hd44780",
    "oled": "feature_oled_driver",
    "backlight": "feature_backlight",
    "ledmatrix": "feature_led_matrix",
    "rgblight": "feature_rgblight",
    "rgbmatrix": "feature_rgb_matrix",
    "audio": "feature_audio",
    "bluetooth": "feature_bluetooth",
    "bootmagic": "feature_bootmagic",
    "custommatrix": "custom_matrix",
    "dipswitch": "feature_dip_switch",
    "encoders": "feature_encoders",
    "hapticfeedback": "feature_haptic_feedback",
    "ctpc": "proton_c_conversion",
    "ps2mouse": "feature_ps2_mouse",
    "splitkeyboard": "feature_split_keyboard",
    "stenography": "feature_stenography",
    "velocikey": "feature_velocikey",
    "mcus": "compatible_microcontrollers",
    "contributing": "contributing",
    "translating": "translating",
    "configoptions": "config_options",
    "understandingkeyboards": "how_keyboards_work",
    "understandingmatrix": "how_a_matrix_works",
    "understandingqmk": "understanding_qmk"
  })[docs],

  /*
  // Format embedded message
  msg: {embed: {
    color: "344703",
    author: {
      name: `Use any of the following commands starting with '!' for more information`
    },
    fields: helpmessage,
    footer: {
      text: `I respond to DMs, too!`
    },
  }},
  */

  // Format embedded message
  msg: {embed: {
    color: "344703",
    author: {
      name: `Use any of the following commands starting with '!' for more information`
    },
    fields: [
      {
        name: '**New Users**',
	value: formatTopics(newUsersTopics)
      },
      {
        name: '**FAQS**',
	value: formatTopics(faqTopics) 
      },
      {
        // has non documentation links -- msys, vid, vidq, promicro, protonc, elitec
        name: "**Building, Flashing, Drivers**",
        value: "configurator, api, zadig, toolbox, flashing, flashing-bootloadhid, keymap, vagrant, ide-eclipse, ide-vscode, git, hand-wire, isp-flashing, msys, vid, vidq, promicro, protonc, elitec"
      },
      {
        name: "**QMK CLI**",
        value: formatTopics(cliTopics)
      },
      {
        name: "**Keycodes**",
        value: formatTopics(keycodesTopics)
      },
      {
        name: "**Advanced Keycodes**",
        value: formatTopics(advKeycodesTopics)
      },
      {
        name: "**Software Features**",
        value: formatTopics(softwareTopics)
      },
      {
        name: "**Hardware Features**",
        value: "*Displays:* lcd, oled\n*Lighting:* backlight, led-matrix, rgblight, rgbmatrix\naudio, bluetooth, bootmagic, custom-matrix, dip-switch, encoders, haptic-feedback, ctpc, ps2-mouse, split-keyboard, stenography, velocikey"
      },
      {
        name: "**Other Information**",
        value: "mcus, contributing, translating, config-options, understanding-keyboards, understanding-matrix, understanding-qmk, conduct"
      },
    ],
    footer: {
      text: `I respond to DMs, too!`
    },
  }},

  plainhelp: plaintext,
  prefix: '!',
  baseurl: 'https://docs.qmk.fm/#/',
  firmware: 'https://github.com/qmk/qmk_firmware/',
  toolbox: 'https://github.com/qmk/qmk_toolbox/',
  disclaimer: "If you don't see an embed, try `!plain`",
  ohshitgit: 'https://ohshitgit.com/',
  git: 'https://docs.qmk.fm/#/newbs_git_best_practices',
  //xkcd: 'https://xkcd.com/1597/',
  xkcd: 'https://imgs.xkcd.com/comics/git.png',
  promicro: 'https://i.imgur.com/GsrDNHK.png',
  protonc: 'https://i.imgur.com/nICqWLo.jpg',
  elitec: 'https://i.imgur.com/WWnicKw.png',
  msys: 'https://msys.qmk.fm/',
  coc: 'https://qmk.fm/coc/',
  kbdfans: 'Against our best advice, KBDfans have chosen a less than ideal bootloader for their newer board revisions. You may have luck using <https://tinyurl.com/KBDFansFlashNew> for reference, but if you are still stuck you will have to visit KBDfans discord for support: <https://discord.gg/kbdfans>',
  vid: 'https://yanfali.github.io/qmk_usb_usage/',
  vidq: 'https://www.the-sz.com/products/usbid/index.php',

  cooldown: [],
  authroles: ['Directors', 'Collaborators'],

  // Parser
  parse: function(string) {
    return string.toLowerCase().substring(1).replace(/[^a-z\-]+/g, '').split(/ +/g);
  },

  // Bare link constructor (inhibits embeds)
  bare: function(string) {
    return `<${string}>`;
  },
};
