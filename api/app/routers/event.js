const express = require('express');
const eventController = require('../controllers/eventController');

// const validate = require('../validation');
// const eventSchema = require('../validation/schemas/event');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/')
  .get(controllerHandler(eventController.findAll))
  .post(controllerHandler(eventController.create));

router.route('/:id')
  .get(controllerHandler(eventController.findOne))
  .patch(controllerHandler(eventController.update))
  .delete(controllerHandler(eventController.delete));

module.exports = router;

/**
     * GET /evenements
     * @summary All event
     * @tags Event
     * @return {object} 200 - success response - application/json
     */
/**
     * GET /evenements/{eventId}
     * @summary event by id
     * @tags Event
     * @return {object} 200 - success response - application/json
     */
/**
/**
  * POST /evenements
  * @summary Create new event
  * @tags Event
  * @param {integer} tag_id.require - type of event (soins, alimentation ect...)
  * @param {integer} animal_id.require - animal registered for the event
  * @param {string} title.query.require- the title of the event
  * @param {string} description.query - description or additional information
  * @param {string} date.timestamptz.require - date of the event
  * @returns 201 - create
  */
/**
/**
     * PATCH /evenements/{eventId}
     * @summary update event
     * @tags Event
  * @param {integer} tag_id - type of event (soins, alimentation ect...)
  * @param {integer} animal_id- animal registered for the event
  * @param {string} title.query - the title of the event
  * @param {string} description.query - description or additional information
  * @param {string} date.timestamptz - date of the event
     * @return {object} 200 - success response - application/json
     */
/**
  * DELETE /evenements/{eventId}
  * @summary Delete event
  * @tags Event
  * @returns 200 - delete
  */
