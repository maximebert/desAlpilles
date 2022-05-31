const express = require('express');
const userController = require('../controllers/userController');

// const validate = require('../validation');
// const userSchema = require('../validation/schemas/user');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/inscription')
  .post(userController.create);
router.post('/connexion', userController.connexion);

router.get('/', userController.findAll);
router.route('/:id')
  .get(controllerHandler(userController.findOne))
  .patch(controllerHandler(userController.update))
  .delete(controllerHandler(userController.delete));

module.exports = router;
/**
  * POST /profils/inscription
  * @summary Create new User
  * @tags User
  * @param {string} lastname.query.require
  * @param {string} firstname.query.require
  * @param {string} email.unique.require
  * @param {string} password.query.require
  * @param {string} confirmPassword.query.require
  * @returns 201 - create
  */
/**
 * POST /profils/connexion
 * @summary Connect with email
 * @route POST /profils/connexion
 * @tags User
 * @param {string} email.unique
 * @param {string} password.query
 * @returns 200 - return all user
 */
/**
     * GET /profils/{userId}
     * @summary Get one user with id
     * @tags User
     * @return {object} 200 - success response - application/json
     * @example response - 200 - success response example
     * [
     *  {
     *    "user_id": 2,
     *    "user_lastname": "moussu",
     *    "user_firstname": "alban",
     *    "user_email": "alban@gmail.com",
     *    "animal": [
     *      {
     *        "animal_id": 6,
     *        "animal_name": "Felix",
     *        "animal_species": "Chat"
     *      },
     *      {
     *        "animal_id": 7,
     *        "animal_name": "Rocky",
     *        "animal_species": "Poule"
     *      }
     *    ],
     *    "event": [
     *      {
     *        "event_id": 2,
     *        "event_title": "Castrations",
     *        "event_date": "2022-04-17T09:00:00+02:00",
     *        "animal_id": 6,
     *        "animal_name": "Felix"
     *      },
     *      {
     *        "event_id": null,
     *        "event_title": null,
     *        "event_date": null,
     *        "animal_id": 7,
     *        "animal_name": "Rocky"
     *      }
     *    ]
     *  }
     *]
     */
/**
     * PATCH /profils/{userId}
     * @summary update user profil
     * @tags User
     * @param {string} lastname.query
     * @param {string} firstname.query
     * @param {string} email.unique
     * @param {string} password.query
     * @param {string} confirmPassword.query
     */
/**
  * DELETE /profils/{userId}
  * @summary Delete user whith id
  * @tags User
  * @returns 200 - return all users
  */
