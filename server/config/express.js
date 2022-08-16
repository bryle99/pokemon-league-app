const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.json');

const app = express();

require('dotenv').config();

app.set('port', process.env.PORT || config['app-port'] || 5000);
app.set('host', process.env.HOST || config['app-host'] || 'localhost');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

module.exports = app;
