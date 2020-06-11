const express = require('express');
const passport = require('../../auth/passportLocal');
const { createUser, doesUserExist } = require('../../auth/authHelpers');

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

app.post('/auth/signup', async (req, res, next) => {
  // TODO: Get keys from the req body first
  console.log(req.body);
  const { username } = req.body;
  const cleanUsername = username.toLowerCase().trim();

  try {
    const userExists = await doesUserExist(cleanUsername);
    console.log(userExists);
    if (userExists) {
      res.json({
        status: `That username is not available. Please choose another one`
      });
      // res.redirect('/');
      // return next();
    } else {
      const user = await createUser(req);
      console.log(user);

      await passport.authenticate('local', {
        failureFlash: true
      })(req, res, next);

      console.log(req.user);

      res.json({ status: 'success' });
    }
  } catch (error) {
    console.log(error);

    next(error);
  }
});

module.exports = app;
