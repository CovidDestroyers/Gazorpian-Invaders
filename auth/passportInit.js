const passport = require('passport');
const { db } = require('../data/database');

module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user);
  });

  passport.deserializeUser((user, done) => {
    console.log('De-Serializing User');

    db.one('SELECT * FROM "users" WHERE username=$1', [user.username])
      .then((myUser) => {
        return done(null, myUser[0]);
      })
      .catch((error) => {
        console.log(
          '===========THERE WAS AN ERROR WITH DESERIALIZE USER============='
        );
        console.log(error);

        return done(null, false, {
          message: 'There was an error. Please try again.'
        });
      });
  });
};
