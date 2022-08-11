const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize-db');

const LeagueSlot = sequelize.define(
  'league_slot',
  {
    totalAtk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    totalDef: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    totalSpd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    overallStats: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.totalAtk + this.totalDef + this.totalSpd;
      },
      set(value) {
        throw new Error('Do not try to set the `overallStats` value!');
      },
    },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = LeagueSlot;
