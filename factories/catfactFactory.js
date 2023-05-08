const axios = require("axios");

const cat = async () => {
  let response = await axios.get("https://catfact.ninja/fact?max_length=200");
  let fact = response.data.fact;
  return fact;
};

module.exports = cat;
