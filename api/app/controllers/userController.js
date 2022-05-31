const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const userMapper = require('../models/user');
const {
  ApiError,
} = require('../helpers/errorHandler');

const userController = {

  async create(req, res) {
    try {
      const newMail = req.body.email;
      const user = await userMapper.findByMail(newMail);
      if (user) {
        return res.status(401).json('Cet email est déjà utilisé.');
      }
      if (!emailValidator.validate(req.body.email)) {
        return res.render('signup', {
          error: "Cet email n'est pas valide.",
        });
      }
      if (req.body.password !== req.body.confirmPassword) {
        return res.render('signup', {
          error: 'La confirmation du mot de passe ne correspond pas.',
        });
      }
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(req.body.password, salt);

      const {
        lastname,
        firstname,
        email,
      } = req.body;
      const hashedPassword = encryptedPassword;

      const newUser = await userMapper.create(lastname, firstname, email, hashedPassword);
      delete newUser.password;
      return res.json(newUser);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },

  async connexion(req, res) {
    const userMail = req.body.email;
    try {
      const user = await userMapper.findByMail(userMail);

      if (!user) {
        return res.status(403).json("Cet utilisateur n'existe pas.");
      }

      const validPwd = await bcrypt.compare(req.body.password, user.password);
      if (!validPwd) {
        return res.status(403).json("Le mot de passe et l'email ne correspondent pas.");
      }

      delete user.password;

      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },

  async findAll(_, res) {
    const user = await userMapper.findAll();
    delete user.password;
    return res.status(200).json(user);
  },

  async findOne(req, res) {
    const {
      id,
    } = req.params;
    const user = await userMapper.findByPk(id);

    if (!user) {
      throw new ApiError(403, 'User not found');
    }

    delete user.password;
    return res.status(200).json(user);
  },

  async update(req, res) {
    const {
      id,
    } = req.params;
    const savedUser = req.body;
    const salt = await bcrypt.genSalt(10);
    savedUser.password = await bcrypt.hash(req.body.password, salt);
    const user = await userMapper.update(id, savedUser);
    delete user.password;

    return res.status(200).json(user);
  },

  async delete(req, res) {
    const {
      id,
    } = req.params;
    const user = await userMapper.delete(id);
    return res.status(200).json(user);
  },

};

module.exports = userController;
