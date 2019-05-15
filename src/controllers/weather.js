const express = require('express');
// const axios = require('../utils/axios');
const weather = require
const Weather = require('../models/Weather');
// const APPID = process.env.APPID;

function getRowData(req,res) {
    const { cc, city } = req.params; 
    const weatherType = req.query.weatherType;
    console.log(weatherType)   ;
   Weather.getData(city,cc,weatherType)
   .then(response => {
     res.send(response);
   })
   .catch(err =>console.log(err)); 
};

module.exports = getRowData;