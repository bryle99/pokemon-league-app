const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize-db');

const Pokemon = sequelize.define(
  'pokemon',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    spd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    totalStats: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.atk + this.def + this.spd;
      },
      set(value) {
        throw new Error('Do not try to set the `totalStats` value!');
      },
    },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Pokemon;
