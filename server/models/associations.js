const League = require('./league.model');
const LeagueSlot = require('./league_slot.model');
const Pokemon = require('./pokemon.model');

const setAssociations = function () {
  League.hasMany(LeagueSlot, {
    foreignKey: 'league_id',
    onDelete: 'CASCADE',
  });
  LeagueSlot.belongsTo(League, {
    foreignKey: 'league_id',
    onDelete: 'CASCADE',
  });

  Pokemon.hasMany(LeagueSlot, {
    foreignKey: 'pokemon_id_1',
    onDelete: 'CASCADE',
  });
  LeagueSlot.belongsTo(Pokemon, {
    foreignKey: 'pokemon_id_1',
    onDelete: 'CASCADE',
    as: 'pokemon_1',
  });

  Pokemon.hasMany(LeagueSlot, {
    foreignKey: 'pokemon_id_2',
    onDelete: 'CASCADE',
  });
  LeagueSlot.belongsTo(Pokemon, {
    foreignKey: 'pokemon_id_2',
    onDelete: 'CASCADE',
    as: 'pokemon_2',
  });
};

module.exports = setAssociations;
