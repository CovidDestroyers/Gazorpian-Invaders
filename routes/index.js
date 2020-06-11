const express = require('express');
const webpackChunkManifest = require('../dist/manifest');

const app = express();

/* GET home page. */
app.get('/', (req, res) => {
  return res.render('index', {
    title: 'Gazorpian Invaders',
    webPackManifest: webpackChunkManifest
  });
});

module.exports = app;
