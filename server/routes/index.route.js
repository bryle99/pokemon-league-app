const express = require('express');
const pokemonRoutes = require('./pokemon.route');
const leagueRoutes = require('./league.route');
const leagueSlotRoutes = require('./league_slot.route');
require('../models/associations')();
const router = express.Router();

router.use('/pokemon', pokemonRoutes);
router.use('/league', leagueRoutes);
router.use('/league_slot', leagueSlotRoutes);

module.exports = router;
