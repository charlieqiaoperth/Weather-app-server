const express = require('express');
const axios = require('axios');

function getRowData(req,res) {
    const { cc, city } = req.params;    
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&APPID=d0487bda7ec2ec8fdc5e3a9c7b34cec5`
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