const express = require('express');
const leagueCtrl = require('../controllers/league.controller');
const validate = require('../middlewares/joi.validate');
const schema = require('../utils/joi.schemas');

const router = express.Router();

router
    .route('/')

    // Create
    .post(validate.bodyValidate(schema.storeLeague), (req, res) => {
        leagueCtrl.store(req, res);
    })

    // Get All
    .get(validate.queryValidate(schema.findAllLeague), (req, res) => {
        leagueCtrl.findAll(req, res);
    });

router
    .route('/:id')

    // Get Entry
    .get((req, res) => {
        leagueCtrl.findById(req, res);
    })

// // Update Entry
// .put((req, res) => {
//     leagueCtrl.update(req, res);
// })

// // Delete Entry
// .delete((req, res) => {
//     leagueCtrl.destroy(req, res);
// });

module.exports = router;
