// Help message content
const helpmessage =  [
  {
    name: "**New Users**",
    value: "tutorial, syllabus, building, flashing, testing, debugging"
  },
  {
    name: "**FAQs**",
    value: "faq, faq-build, faq-debug, faq-keymap, glossary"
  },
  {
    name: "**Building, Flashing, Drivers**",
    value: "configurator, api, zadig, toolbox, flashing, flashing-bootloadhid, keymap, vagrant, ide-eclipse, ide-vscode, git, hand-wire, isp-flashing, msys, vid, vidq, promicro, protonc, elitec, blackpill, bluepill"
  },
  {
    name: "**QMK CLI**",
    value: "cli, cli-configuration, cli-commands"
  },
  {
    name: "**Keycodes**",
    value: "keycodes, keycodes-basic, keycodes-quantum, keycodes-advanced, keycodes-shifted"
  },
  {
    name: "**Advanced Keycodes**",
    value: "command, dynamic-macros, grave-escape, leader, mod-tap, macros, mouse-keys, space-cadet, keycodes-shifted"
  },
  {
    name: "**Software Features**",
    value: "auto-shift, combos, debounce, key-lock, key-overrides, layers, one-shot-keys, pointing-device, swap-hands, tap-dance, tap-hold, terminal, unicode, wpm"
  },
  {
    name: "**Hardware Features**",
    value: "*Displays:* lcd, oled\n*Lighting:* backlight, led-matrix, rgblight, rgbmatrix\naudio, bluetooth, bootmagic, custom-matrix, dip-switch, encoders, haptic-feedback, ctpc, ps2-mouse, split-keyboard, stenography, velocikey"
  },
  {
    name: "**Other Information**",
    value: "lighting, mcus, contributing, translating, config-options, understanding-keyboards, understanding-matrix, understanding-qmk, conduct"
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
    "keyoverrides": "feature_key_overrides",
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
  blackpill: 'https://i.imgur.com/nCgeolT.png',
  bluepill: 'https://i.imgur.com/mpiVwDX.jpg',
  msys: 'https://msys.qmk.fm/',
  coc: 'https://qmk.fm/coc/',
  kbdfans: 'Against our best advice, KBDfans have chosen a less than ideal bootloader for their newer board revisions. You may have luck using <https://tinyurl.com/KBDFansFlashNew> for reference, but if you are still stuck you will have to visit KBDfans discord for support: <https://discord.gg/kbdfans>',
  vid: 'https://yanfali.github.io/qmk_usb_usage/',
  vidq: 'https://www.the-sz.com/products/usbid/index.php',
  lighting: '**Backlight:** Single color, per key, not individually addressable (all on or off)\n**RGBLight:** Underglow RGB, linear design (single chain), individually addressable\n**LED Matrix:** Single color, per key, individually addressable\n**RGB Matrix:** RGB, per key, individually addressable\n**Indicators:** Scroll/Caps/Num Lock LEDs',

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
