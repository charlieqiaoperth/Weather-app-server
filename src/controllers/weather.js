const express = require('express');
// const axios = require('../utils/axios');
const responseFormatter = require('../utils/responseFormatter');
const Weather = require('../models/Weather');

// const APPID = process.env.APPID;

function getRowData(req,res,next) {
    const { cc, city } = req.params; 
    const weatherType = req.query.weatherType;
    // console.log(weatherType)   ;
   Weather.getData(city,cc,weatherType)
   .then(response => responseFormatter(res, 200, null, response))
   .catch(err =>next(err)); 
};

module.exports = getRowData;