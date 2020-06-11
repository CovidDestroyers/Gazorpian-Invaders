const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const bcrypt = require('bcryptjs');
// const { db } = require('../data/database');
const { getUserByUserName } = require('../data/queries/authSQL');

const options = {};

/**
 * Creates a new Passport  Local Strategy
 *
 * @type {Strategy} passport local strategy
 */
const localStrategy = new LocalStrategy(
  options,
  async (username, password, done) => {
    const lowerCaseUsername = username.toLowerCase().trim();
    let user;

    try {
      user = await getUserByUserName(lowerCaseUsername);

      if (!user[0]) {
        return done(null, false);
      }

      if (!bcrypt.compareSync(password, user[0].password)) {
        return done(null, false);
      }

      return done(null, user[0]);
    } catch (error) {
      console.log(error);

      return done(null, false);
    }
  }
);

passport.use('local', localStrategy);

module.exports = passport;
