const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const notFound= require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();
const routes = require('./routes');

const PORT = process.env.PORT || 5000;
 
app.use(helmet());
app.use(cors());

app.use(routes);
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () =>{
    console.log(`server listen on PORT ${PORT}`);
});