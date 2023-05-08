const { factGen } = require("./interfaces/catInterface");

const args = process.argv;

const main = async () => {
  if (args.length > 2) {
    switch (args[2]) {
      case "catfacts":
        let numfacts = parseInt(args[3]);
        factGen(true, numfacts);
        break;
      case "catfact":
        factGen(false, 0);
        break;
    }
  }
};
main();
