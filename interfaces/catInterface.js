const cat = require("../factories/catfactFactory");

const factGen = async (flag, numfacts) => {
  if (flag) {
    let facts = [];
    for (let i = 0; i < numfacts; i++) {
      facts.push({ facts: await cat() });
    }
    console.table(facts);
  } else {
    console.table({ fact: await cat() });
  }
};
module.exports = { factGen };
