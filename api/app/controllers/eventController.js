const eventMapper = require('../models/event');

const eventController = {

  async create(req, res) {
    const newEvent = req.body;
    const event = await eventMapper.create(newEvent);
    return res.status(201).json(event);
  },

  // Méthode daffichage de tout les  évenements
  async findAll(_, res) {
    const event = await eventMapper.findAll();
    return res.status(200).json(event);
  },

  // Méthode d'affichage d'un évenement
  async findOne(req, res) {
    const { id } = req.params;
    const event = await eventMapper.findByPk(id);
    return res.status(200).json(event);
  },

  // Méthode de mise à jour d'un évenement
  async update(req, res) {
    const { id } = req.params;
    const savedevent = req.body;
    const event = await eventMapper.update(id, savedevent);
    return res.status(200).json(event);
  },

  // Méthode de suppression d'un évenement
  async delete(req, res) {
    const { id } = req.params;
    const event = await eventMapper.delete(id);
    return res.status(200).json(event);
  },

};

module.exports = eventController;
