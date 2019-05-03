const express = require('express');
const axios = require('axios');
const APPID = process.env.APPID;

function getRowData(req,res) {
    const { cc, city } = req.params;    
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&APPID=${APPID}`
      )
      .then(response => {
        res.send(response.data);
      })
      .catch(err => console.log(err));
    // return (
    //     res.send('Welcome!!!')
    //     );
};

module.exports = getRowData;