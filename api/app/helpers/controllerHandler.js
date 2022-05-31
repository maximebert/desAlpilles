const ApiError = require('../errors/apiError');

module.exports = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (err) {
    // console.log(err);
    const apiError = new ApiError(err.statusCode, err.message);
    next(apiError);
  }
};
