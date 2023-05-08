const axios = require("axios");

const joke = async () => {
  let response = await axios.get(
    "https://official-joke-api.appspot.com/random_joke"
  );
  response.data = {
    setup: response.data.setup,
    punchline: response.data.punchline,
  };
  return response.data;
};

module.exports = { joke };
