const { bored } = require("../factories/boredFactory");

const boredInterface = async () => {
  console.table(await bored());
};

module.exports = { boredInterface };
