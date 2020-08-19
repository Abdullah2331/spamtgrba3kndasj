const express = require("express");
const app = express();

app.listen(() => console.log("Bot started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');
const client = new Discord.Client();


////////////

client.on('message', message => {
  if (message.content === prefix + '31d') {
    message.channel.send('#daily')
  }
  if (message.content === prefix + '31c') {
    message.channel.send('#credits')
  }
  if (message.content === prefix + '31p') {
    message.channel.send('#profile')
  }
  if (message.content === prefix + 'r1') {
    message.channel.send("#rep " + "<@" + myid + ">")
  }
  if (message.content.startsWith(prefix + '31s')) {
    var text = message.content.split(' ').slice(1).join(' ');
    message.channel.send(text);
  }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client.on('message', message => {
  if (message.content === prefix + 'fast 1k') {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
        .then(m => {
          count++;
        })

    }
  }
  if (message.content === prefix + 'fast 2k') {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
        .then(m => {
          count++;
        })

    }
  }
  if (message.content === prefix + 'fast 3k') {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
        .then(m => {
          count++;
        })

    }
  }
  if (message.content === prefix + 'fast 4k') {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
        .then(m => {
          count++;
        })

    }
  }
  if (message.content === prefix + 'fast 5k') {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
        .then(m => {
          count++;
        })

    }
  }
  if (message.content === prefix + 'fast 6k') {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
        .then(m => {
          count++;
        })

    }
  }
  if (message.content === prefix + 'fast 7k') {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
        .then(m => {
          count++;
        })

    }
  }
  if (message.content === prefix + 'fast 8k') {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
        .then(m => {
          count++;
        })

    }
  }
  if (message.content === prefix + 'fast 9k') {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
        .then(m => {
          count++;
        })

    }
  }
  if (message.content === prefix + 'fast 10k') {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
        .then(m => {
          count++;
        })

    }
  }

  if (message.content === prefix + '31spam') {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 40000; x++) {
      message.channel.send(`**$31spam**[ " ${x} " ]****`)
        .then(m => {
          count++;
        })

    }
  }
});

client.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("")
    await message.channel.send("Bot Stoped")
  }
})



client.login(process.env.token1);

const prefix = "$"
