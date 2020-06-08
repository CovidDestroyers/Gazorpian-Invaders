const express = require('express');
const passport = require('../../auth/passportLocal');

const app = express();

app.post(
  '/login/auth',
  passport.authenticate('local', {
    failureRedirect: '/',
    failureFlash: true
  }),
  (req, res, next) => {
    try {
      return res.redirect('/');
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
);

module.exports = app;
