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

app.post('/update/score', async (req, res, next) => {
  try {
    console.log(req.body);
    res.end();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = app;
