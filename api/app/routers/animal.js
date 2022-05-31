const express = require('express');

const animalController = require('../controllers/animalController');

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router

  .route('/')
  .get(controllerHandler(animalController.findAll))
  .post(controllerHandler(animalController.create));

router
  .route('/:id')
  .get(controllerHandler(animalController.findOne))
  .patch(controllerHandler(animalController.update))
  .delete(controllerHandler(animalController.delete));

module.exports = router;

/**
     * GET /animaux
     * @summary All pets
     * @tags Animal
     * @return {object} 200 - success response - application/json
     */
/**
     * GET /animaux/{animalId}
     * @summary animal by id
     * @tags Animal
     * @return {object} 200 - success response - application/json
     */
/**
/**
  * POST /animaux
  * @summary Create new animal
  * @tags Animal
  * @param {integer} user_id.require - animal owner
  * @param {integer} species_id.require - animal species (chat, chien, canard...)
  * @param {string} breed.query - animal breed (persan, maincoon, bouledogue...)
  * @param {string} dress.query - animal dress/color
  * @param {string} name.query - animal name
  * @param {string} birth.query.date - birthdate
  * @param {string} icad.query.unique - chip number, or lof/loof
  * @param {string} sex.query.require - male or femelle
  * @param {string} veterinary.query - veterinary name, adress or comment
  * @returns 201 - create
  */
/**
/**
  * PATCH /animaux/{animalId}
  * @summary update animal
  * @tags Animal
  * @param {integer} user_id - animal owner
  * @param {integer} species_id - animal species (chat, chien, canard...)
  * @param {string} breed.query - animal breed (persan, maincoon, bouledogue...)
  * @param {string} dress.query - animal dress/color
  * @param {string} name.query - animal name
  * @param {string} birth.query.date - birthdate
  * @param {string} icad.query - chip number, or lof/loof
  * @param {string} sex.query - male or femelle
  * @param {string} veterinary.query - veterinary name, adress or comment
  * @return {object} 200 - success response - application/json
*/
/**
  * DELETE /animaux/{animalId}
  * @summary Delete animal
  * @tags Animal
  * @returns 200 - delete
  */
