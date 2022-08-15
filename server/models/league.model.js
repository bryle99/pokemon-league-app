const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize-db');

const League = sequelize.define(
  'league',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terrain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.fn('now'),
    },
    reqSlots: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    maxStatsLimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = League;
