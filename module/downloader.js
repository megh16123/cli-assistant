const axios = require("axios");
const fs = require("fs");
const path = require("path");

const down = async (url) => {
  let urldat = url.split("/");
  const response = await axios({
    method: "GET",
    url: url,
    responseType: "stream",
  });
  response.data.pipe(
    fs.createWriteStream(path.join(process.cwd(), urldat[urldat.length - 1]))
  );
};

module.exports = { down };
