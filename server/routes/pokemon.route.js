const express = require('express');
const pokemonCtrl = require('../controllers/pokemon.controller');
const validate = require('../middlewares/joi.validate');
const schema = require('../utils/joi.schemas');

const router = express.Router();

router
    .route('/')

    // Create
    .post(validate.bodyValidate(schema.storePokemon), (req, res) => {
        pokemonCtrl.store(req, res);
    })

    // Get All
    .get(validate.queryValidate(schema.findAllPokemon), (req, res) => {
        pokemonCtrl.findAll(req, res);
    });

router
    .route('/:id')

    // Get Entry
    .get((req, res) => {
        pokemonCtrl.findById(req, res);
    })

// // Update Entry
// .put((req, res) => {
//     pokemonCtrl.update(req, res);
// })

// // Delete Entry
// .delete((req, res) => {
//     pokemonCtrl.destroy(req, res);
// });

module.exports = router;
