const animalMapper = require('../models/animal');

const animalController = {

  // Méthode d'ajout d'un animal
  async create(req, res) {
    const newAnimal = req.body;
    const animal = await animalMapper.create(newAnimal);
    return res.status(201).json(animal);
  },

  // Méthode daffichage de toutes les animaux
  async findAll(_, res) {
    const animal = await animalMapper.findAll();
    return res.status(200).json(animal);
  },

  // Méthode d'affichage d'un animal
  async findOne(req, res) {
    const { id } = req.params;
    const animal = await animalMapper.findByPk(id);
    return res.status(200).json(animal);
  },

  // Méthode de mise à jour d'un animal
  async update(req, res) {
    const { id } = req.params;
    const savedAnimal = req.body;
    const animal = await animalMapper.update(id, savedAnimal);
    return res.status(200).json(animal);
  },

  // Méthode de suppression d'un animal
  async delete(req, res) {
    const { id } = req.params;
    const animal = await animalMapper.delete(id);
    return res.status(200).json(animal);
  },

};

module.exports = animalController;
