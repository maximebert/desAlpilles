const express = require('express');

const userRouter = require('./user');
const AnimalRouter = require('./animal');
const eventRouter = require('./event');
const tipsRouter = require('./tips');
const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

router.use('/', tipsRouter);
router.use('/profils', userRouter);
router.use('/animaux', AnimalRouter);
router.use('/evenements', eventRouter);

router.use((err, _, response, next) => {
  errorHandler(err, response, next);
});

module.exports = router;
