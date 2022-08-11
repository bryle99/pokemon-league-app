const cors = require('cors');
const express = require('express');

const app = express();

require('dotenv').config();

app.set('port', process.env.APP_PORT || 5000);
app.set('host', process.env.APP_HOST || 'localhost');

app.use(cors());

module.exports = app;
