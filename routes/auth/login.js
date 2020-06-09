const express = require('express');
const passport = require('../../auth/passportLocal');

const app = express();

/**
 * @param {req}
 */
app.post(
  '/login',
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
