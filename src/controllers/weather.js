const express = require('express');
const axios = require('../utils/axios');
const APPID = process.env.APPID;

function getRowData(req,res) {
    const { cc, city } = req.params;    
    axios
      .get(
        `/weather?q=${city},${cc}`
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