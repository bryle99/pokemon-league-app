const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.json');

const app = express();

require('dotenv').config();

app.set('port', config['app-port'] || 5000);
app.set('host', config['app-host'] || 'localhost');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

module.exports = app;
