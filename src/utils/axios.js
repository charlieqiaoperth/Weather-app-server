const axios = require('axios');

const instance = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5",
    params: {
        APPID:process.env.APPID,
        unit:'metric'
    }
})

module.exports = instance;