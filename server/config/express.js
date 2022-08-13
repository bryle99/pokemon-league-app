const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('dotenv').config();

app.set('port', process.env.APP_PORT || 5000);
app.set('host', process.env.APP_HOST || 'localhost');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

module.exports = app;
