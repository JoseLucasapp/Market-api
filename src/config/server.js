require('dotenv').config();
const express = require('express');

const client = require('./dbConnection');
const app = express();

client.connect();

require('./middlewares')(app);
require('./routes')(app);

app.listen(3000);

module.exports = app;