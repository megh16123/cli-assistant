const { factGen } = require("./interfaces/catInterface");
const { boredInterface } = require("./interfaces/boredInterface");
const { guessInterface } = require("./interfaces/guessageInterface");
const { jokeInterface } = require("./interfaces/jokeInterface");
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
      console.log(__dirname);
      break;
    default:
      console.error("Unknown command");
  }
}
