const decompress = require("decompress");

const unzip = (current, dest) => {
  decompress(current, dest)
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};

module.exports = { unzip };
