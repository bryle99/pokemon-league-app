const Sequelize = require('sequelize');
require('dotenv').config();
const config = require('./config.json');

const sequelize = new Sequelize(
  config['db-name'],
  config['db-user'],
  config['db-pass'],
  {
    host: config['db-host'],
    port: config['db-port'],
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = sequelize;
