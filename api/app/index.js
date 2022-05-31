const cors = require('cors');

const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const router = require('./routers');
// const apiDocCreator = require('./helpers/apiDoc');

const app = express();
const options = {
  info: {
    version: '1.0.0',
    title: 'o-pet',
    license: {
      name: 'MIT',
    },
  },
  baseDir: __dirname,
  filesPattern: './**/*.js',
  swaggerUIPath: '/api-docs',
};
expressJSDocSwagger(app)(options);
// require('./helpers/apiDoc')(app);

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports = app;
