const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://3000-rose-firefly-hc1qbkah.ws-us17.gitpod.io/special-connections',
});

module.exports = axiosInstance;