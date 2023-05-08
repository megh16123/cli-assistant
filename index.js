const args = process.argv;
const cat = require("./cat");

const main = async () => {
  if (args.length > 2) {
    switch (args[2]) {
      case "catfacts":
        let numfacts = parseInt(args[3]);
        let facts = [];
        for (let i = 0; i < numfacts; i++) {
          facts.push({ facts: await cat() });
        }
        console.table(facts);
        break;
      case "catfact":
        console.table({ fact: await cat() });
        break;
    }
  }
};
main();
