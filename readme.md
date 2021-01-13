QMK Helper
===

A Discord chat bot to facilitate linking to commonly used documentation for [QMK.](https://github.com/qmk/qmk_firmware/')

Bot Maintainer: [George Koenig (ridingqwerty)](https://github.com/ridingqwerty/)

Usage:

This bot is for the benefit of the QMK community to be able to quickly link to documentation in the QMK Discord server for something a newcomer might need to be educated about.

Typing `!help` into any channel in the QMK Discord will cause the bot to PM a list of usable commands.

A community member typing any of these commands will post a publicly viewable link into the channel it was called in.

The bot also responds to PMs directly, so users can interact with it privately if they would like.

Any suggestions are welcome!

Installation:

```
git clone https://github.com/ridingqwerty/qmk_helper_bot.git
cd qmk_helper_bot
[stage .env file containing TOKEN in working dir]
docker build -t qmk-bot .
docker run -d qmk-bot
```
