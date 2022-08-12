const express = require('express');
const leagueSlotCtrl = require('../controllers/league_slot.controller');
const validate = require('../config/joi.validate');
const schema = require('../utils/validator');

const router = express.Router();

router
    .route('/')

    // Create
    .post((req, res) => {
        leagueSlotCtrl.store(req, res);
    })

    // Get All
    .get((req, res) => {
        leagueSlotCtrl.findAll(req, res);
    });

router
    .route('/:id')

    // Get Entry
    .get((req, res) => {
        leagueSlotCtrl.findById(req, res);
    })

// // Update Entry
// .put((req, res) => {
//     leagueSlotCtrl.update(req, res);
// })

// // Delete Entry
// .delete((req, res) => {
//     leagueSlotCtrl.destroy(req, res);
// });

module.exports = router;
