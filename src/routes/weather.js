const express = require('express');
const getRowData = require('../controllers/weather');
const countryValidator = require('../middleware/conuntryValidator');
const router = express.Router();


router.get('/:cc/:city', countryValidator, getRowData);

module.exports =router;