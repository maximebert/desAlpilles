const express = require('express');

const tipsController = require('../controllers/tipsController');

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router

  .route('/')
  .get(controllerHandler(tipsController.random));

// route pour filtrer les conseils par éspèces
// router
//   .route('/:id')
//   .get(controllerHandler(tipsController.randomBySpecies));

module.exports = router;
/**
     * GET /
     * @summary Random tips
     * @tags Tips
     * @return {object} 200 - success response - application/json
     * @example response - 200 - success response example
     *[
     *  {
     *    "id": 5,
     *    "species_id": 5,
     *    "description": "Ouais mais nous on change de coin, et quand ils arrivent...",
     *    "created_at": "2022-03-31T08:03:11.005Z",
     *    "updated_at": null
     *  }
     *]
     */
