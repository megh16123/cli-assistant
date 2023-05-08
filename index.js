#!/usr/bin/env node
const path = require("path");
const { factGen } = require("./interfaces/catInterface");
const { boredInterface } = require("./interfaces/boredInterface");
const { guessInterface } = require("./interfaces/guessageInterface");
const { jokeInterface } = require("./interfaces/jokeInterface");
const { unzip } = require("./module/unzipper");
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
        unzip(source,process.cwd());
      }
      break;
    default:
      console.error("Unknown command");
  }
} else {
  console.error("Unknown command");
}
