const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const bcrypt = require('bcryptjs');
const { db } = require('../data/database');

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
      // TODO: this needs to change to implement db.one with proper error
      //  handling
      user = await db.any('SELECT * FROM "users" WHERE LOWER(username)=$1', [
        lowerCaseUsername
      ]);

      // TODO: extract into own function
      if (!user[0]) {
        return done(null, false, {
          message: 'Incorrect username and password combination.'
        });
      }

      // TODO: extract into own function
      if (!bcrypt.compareSync(password, user[0].password)) {
        return done(null, false, {
          message: 'Incorrect username and password combination.'
        });
      }

      return done(null, user[0]);
    } catch (error) {
      console.log(error);

      return done(null, false, {
        message: 'There was an error. Please try again.'
      });
    }
  }
);

passport.use('local', localStrategy);

module.exports = passport;
