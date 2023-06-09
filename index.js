#!/usr/bin/env node
const path = require("path");

const pjson = require("./package.json");
const { factGen } = require("./interfaces/catInterface");
const player = require("play-sound")((opts = {}));
const { boredInterface } = require("./interfaces/boredInterface");
const { guessInterface } = require("./interfaces/guessageInterface");
const { jokeInterface } = require("./interfaces/jokeInterface");
const { calculate } = require("./module/calc");
const { unzip } = require("./module/unzipper");
const { down } = require("./module/downloader");
const args = process.argv;
if (args.length > 2) {
  switch (args[2]) {
    case "catfacts":
      let numfacts = parseInt(args[3]);
      factGen(true, numfacts);
      break;
    case "catfact":
      factGen(false, 0);
      break;
    case "bored":
      boredInterface();
      break;
    case "guessmyage":
      let name = args[3];
      guessInterface(name);
      break;
    case "joke":
      jokeInterface();
      break;
    case "unzip":
      let source = path.join(process.cwd(), args[3]);
      if (args.length == 5) {
        let destination = path.join(process.cwd(), args[4]);
        unzip(source, destination);
      } else if (args.length == 4) {
        unzip(source, process.cwd());
      }
      break;
    case "--version":
    case "-v":
      console.log(pjson.version);
      break;
    case "cal":
      calculate(args);
      break;
    case "down":
      let path = args[3];
      try {
        down(path);
      } catch (error) {
        return;
      }
      break;
    case "timer":
      let time = parseInt(args[3]);
      setTimeout(() => {
        player.play("./media/alarmy.mp3", (err) => {
          console.log(err);
        });
      }, time* 60000);
      break;
    default:
      console.error("Unknown command");
  }
} else {
  console.error("Unknown command");
}
