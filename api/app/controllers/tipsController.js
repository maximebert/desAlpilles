const eventMapper = require('../models/tips');

const eventController = {

  // envoi aléatoire de tout les conseils
  async random(_, res) {
    const tips = await eventMapper.random();
    return res.status(200).json(tips);
  },

  //  TODO Tips aléatoire filtré par espèces
  //   async randomBySpecies(req, res) {
  //     const { id } = req.params;
  //     const tips = await eventMapper.randomBySpecies(id);
  //     return res.status(200).json(tips);
  //   },

};

module.exports = eventController;
