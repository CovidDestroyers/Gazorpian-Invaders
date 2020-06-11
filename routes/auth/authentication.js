const express = require('express');
const passport = require('../../auth/passportLocal');
const { createUser, doesUserExist } = require('../../auth/authHelpers');

const app = express();

/**
 * Custom passport auth handler
 * @param req
 * @param res
 * @param next
 * @returns {Promise<any>}
 */
const passportAuth = async (req, res, next) => {
  return passport.authenticate('local', (err, user, info) => {
    console.log(info);
    if (err) {
      console.log(err);
      res.json({
        status: `Authentication failed. Please try again.`
      });
    }

    if (!user) {
      res.json({
        status: `Authentication failed. Please try again.`
      });
    }
    res.json({
      status: 'success',
      username: user.username,
      highScore: user.score
    });
  })(req, res, next);
};

app.post('/auth/login', async (req, res, next) => {
  try {
    await passportAuth(req, res, next);
  } catch (error) {
    console.log(error);

    next(error);
  }
});

app.post('/auth/signup', async (req, res, next) => {
  const { username } = req.body;
  const cleanUsername = username.toLowerCase().trim();

  try {
    const userExists = await doesUserExist(cleanUsername);

    if (userExists) {
      res.json({
        status: `That username is not available. Please choose another one`
      });
    } else {
      await createUser(req);

      await passportAuth(req, res, next);
    }
  } catch (error) {
    console.log(error);

    next(error);
  }
});

app.post(
  '/logout',
  (req, res, next) => {
    console.log('Logging Out');
    req.session.destroy((err) => {
      if (err) {
        next(err);
      }
      req.logout();
      next();
    });
  },
  (req, res) => {
    res.json({ message: 'Logout succesful' });
  }
);

module.exports = app;
