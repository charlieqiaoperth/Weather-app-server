const express = require('express');
const getRowData = require('../controllers/weather');
const router = express.Router();


router.get('/:cc/:city', getRowData);

module.exports =router;