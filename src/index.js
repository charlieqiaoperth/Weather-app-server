const express = require('express');
const app = express();
const notFound= require("./middleware/notFound")
require('dotenv').config();
const routes = require('./routes');

const PORT = process.env.PORT || 5000;

app.use(routes);
app.use(notFound);

app.listen(PORT, () =>{
    console.log(`server listen on PORT ${PORT}`);
});