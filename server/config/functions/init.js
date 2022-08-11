exports.syncAlter = function () {
  const sequelize = require('../sequelize-db');
  require('../../models/associations')();

  // syncing models
  sequelize.sync({ alter: true });
};
