const { joke } = require("../factories/jokeFactory");

const jokeInterface = async () => {
  console.table(await joke());
};

module.exports = { jokeInterface };
