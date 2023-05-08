const axios = require("axios");

const guess = async (name) => {
  let response = await axios.get(`https://api.agify.io?name=${name}`);
  if (response.data.age == null) {
    response.data.age = "Cannot Compute";
  }
  return response.data;
};

module.exports = { guess };
