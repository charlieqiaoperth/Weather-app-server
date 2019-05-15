const axios = require('../utils/axios');
const City = require('./City');
const CurrentWeather = require('./CurrentWeather')
const ForecastWeather = require('./ForcastWeather');

class Weather {
    constructor() {}
    getData(city,country,weatherType){
        return Promise.all(getWeatherData(city,country))
        .then(dataArray =>{
            const current = dataArray[0].data;
            const forecast = dataArray[1].data;
            const weather = {
                city:new City(forecast.city),
                currentWeather: new CurrentWeather(current),
                forecastWeather:forecast.list.map(i => new ForecastWeather(i))
            };
            filterData(weather,weatherType);             
            return weather;
        });
     
    }
}

function getWeatherData (city,country) {
    const urls = ['/weather','/forecast'];
    const queryString = `${city},${country}`;
    return urls.map(i => {
        return axios.get(i, {params: {q:queryString}})
    })
}

function filterData (data,weatherType) {
    if (weatherType === "current") {
        delete data.forecastWeather;
    }
    if (weatherType === "forecast") {
        delete data.currentWeather;
    }
}

module.exports = new Weather();