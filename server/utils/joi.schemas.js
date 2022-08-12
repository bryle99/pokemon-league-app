const Joi = require('joi').extend(require('@joi/date'));

module.exports = {
    // pokemon model validators
    findAllPokemon: Joi.object({
        page: Joi.integer(),
        pageSize: Joi.integer(),
    }),
    storePokemon: Joi.object({
        name: Joi.string().required(),
        type: Joi.string().required(),
        atk: Joi.integer().required(),
        def: Joi.integer().required(),
        spd: Joi.integer().required(),
    }),
    // league model validators
    findAllLeague: Joi.object({
        page: Joi.integer(),
        pageSize: Joi.integer(),
    }),
    storeLeague: Joi.object({
        title: Joi.string().required(),
        location: Joi.string().required(),
        terrain: Joi.integer().required(),
        date: Joi.date().format('YYYY-MM-DD').required(),
        reqSlots: Joi.integer().required(),
        maxStatsLimit: Joi.integer().required(),
    }),
    // league_slot model validators
    findAllLeagueSlot: Joi.object({
        page: Joi.integer(),
        pageSize: Joi.integer(),
    }),
    storeLeagueSlot: Joi.object({
        pokemon_id_1: Joi.integer().required(),
        pokemon_id_2: Joi.integer().required(),
        league_id: Joi.integer().required(),
    }),
};
