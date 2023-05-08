const axios = require("axios");

const bored = async () => {
  let response = await axios.get("https://www.boredapi.com/api/activity");
  return response.data;
};

module.exports = {bored}
