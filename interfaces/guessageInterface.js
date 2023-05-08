const { guess } = require("../factories/guessageFactory");

const guessInterface = async (name) => {
  console.table(await guess(name));
};

module.exports = { guessInterface };
