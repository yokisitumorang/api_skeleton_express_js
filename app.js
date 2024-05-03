const express = require('express');
const app = express();
const routes = require('./routes/route');
require('dotenv').config();



app.use(express.json());
app.use(express.urlencoded({ extended: true })); // This line enables x-www-form-urlencoded parsing
app.use('/', routes);


app.listen(3000, () => {
    console.log('API server is running on port 3000');
});


