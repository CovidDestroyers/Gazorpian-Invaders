const passport = require('passport');
const { db } = require('../data/database');

module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user);
  });

  passport.deserializeUser(async (user, done) => {
    console.log('De-Serializing User');

    try {
      const myUser = await db.any('SELECT * FROM "users" WHERE id=$1', [
        user.id
      ]);

      return done(null, myUser[0]);
    } catch (error) {
      console.log('======= ERROR WITH DESERIALIZEUSER ========');
      console.log(error);

      return done(null, false, {
        message: 'There was an error. Please try again.'
      });
    }
  });
};
