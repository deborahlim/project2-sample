const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://3000-brown-viper-dk87gdu8.ws-us17.gitpod.io/special-connections',
});

module.exports = axiosInstance;