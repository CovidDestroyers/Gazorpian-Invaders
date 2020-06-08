const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { db } = require('../data/database');
const init = require('./passportInit');

const options = {};

init();

const localStrategy = new LocalStrategy(
  options,
  async (username, password, done) => {
    let user;
    try {
      // TODO: this needs to change to implement db.one
      user = await db.any('SELECT * FROM "users" WHERE username=$1', [
        username
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

module.exports = { localStrategy };
