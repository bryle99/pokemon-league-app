const Joi = require('joi').extend(require('@joi/date'));

module.exports = {
  // pokemon model validators
  findAllPokemon: Joi.object({
    page: Joi.number().integer(),
    pageSize: Joi.number().integer(),
  }),
  storePokemon: Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    atk: Joi.number().integer().required(),
    def: Joi.number().integer().required(),
    spd: Joi.number().integer().required(),
  }),
  // league model validators
  findAllLeague: Joi.object({
    page: Joi.number().integer(),
    pageSize: Joi.number().integer(),
  }),
  storeLeague: Joi.object({
    title: Joi.string().required(),
    location: Joi.string().required(),
    terrain: Joi.string().required(),
    date: Joi.date().format('YYYY-MM-DD').required(),
    reqSlots: Joi.number().integer().required(),
    maxStatsLimit: Joi.number().integer().required(),
  }),
  // league_slot model validators
  findAllLeagueSlot: Joi.object({
    page: Joi.number().integer(),
    pageSize: Joi.number().integer(),
    league_id: Joi.number().integer(),
  }),
  storeLeagueSlot: Joi.object({
    pokemon_id_1: Joi.number().integer().required(),
    pokemon_id_2: Joi.number().integer().required().allow(null),
    league_id: Joi.number().integer().required(),
  }),
};
