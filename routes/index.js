const express = require('express');

const app = express();

/* GET home page. */
app.get('/', (req, res) => {
  return res.render('index', {
    title: 'Gazorpian Invaders',
    message: req.flash('error')[0]
  });
});

module.exports = app;
