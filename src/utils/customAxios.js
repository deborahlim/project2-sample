const axios = require("axios");

const axiosInstance = axios.create({
  baseURL:
    "https://dlhy-tgc-special-connections.herokuapp.com/special-connections/",
});

module.exports = axiosInstance;
