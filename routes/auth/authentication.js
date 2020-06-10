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
  // TODO: check if user already exists first
  const dirtyUsername = req.body.username;
  const cleanUsername = dirtyUsername.toLowerCase().trim();

  try {
    const userExists = await doesUserExist(cleanUsername);
    if (userExists) {
      // res.json({ message: 'User name is already taken' });
      res.redirect('/');
      // return next();
    }

    const user = await createUser(req);
    console.log(user);

    return passport.authenticate('local', {
      successRedirect: '/',
      failureFlash: true
    })(req, res, next);
  } catch (error) {
    console.log(error);

    return next(error);
  }
});

module.exports = app;
