const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('pokemon_league', 'root', '', {
  host: 'localhost',
  port: 3308,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
