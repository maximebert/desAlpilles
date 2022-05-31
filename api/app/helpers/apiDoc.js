const expressJSDocSwagger = require('express-jsdoc-swagger');

const options = {
  info: {
    version: '1.0.0',
    title: 'o-pet',
    license: {
      name: 'MIT',
    },
  },
  baseDir: __dirname,
  filesPattern: './routers/*.js',
  swaggerUIPath: '/api-docs',
};

module.exports = (app) => expressJSDocSwagger(app)(options);
