const express = require('express');
const leagueSlotCtrl = require('../controllers/league_slot.controller');
const validate = require('../middlewares/joi.validate');
const schema = require('../utils/joi.schemas');

const router = express.Router();

router
    .route('/')

    // Create
    .post(validate.bodyValidate(schema.storeLeagueSlot), (req, res) => {
        leagueSlotCtrl.store(req, res);
    })

    // Get All
    .get(validate.queryValidate(schema.findAllLeagueSlot), (req, res) => {
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
