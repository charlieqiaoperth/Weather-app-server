const express = require('express');
const router = express.Router();
const responseFormatter = require('./utils/responseFormatter');
const weatherRoutes = require('./routes/weather');


router.get('/', (req,res) => responseFormatter(res, 200, 'Welcome to the weather api! Visit /api-docs for help', null));

  

router.use('/api/weather',weatherRoutes);

 module.exports= router;

