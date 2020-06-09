const { db } = require('../database');

/**
 * Inserts and returns a user object
 * @param userID
 * @param username
 * @param hashedPassword
 * @param dateJoined
 * @returns {Promise<any>}
 */
const insertNewUser = async (userID, username, hashedPassword, dateJoined) => {
  try {
    const insertUser = await db.one(
      'INSERT INTO users (id, username,' +
        ' password, date_joined) VALUES ($1, $2, $3, $4) RETURNING *',
      [userID, username, hashedPassword, dateJoined]
    );
    return insertUser;
  } catch (error) {
    console.log(error);

    return error;
  }
};

/**
 * Checks if user exists. Returns true or false
 * @param username
 * @returns {Boolean}
 */
const doesUserExist = async (username) => {
  try {
    const existance = await db.one(
      'SELECT exists(SELECT username FROM "users" WHERE username = $1)',
      [username]
    );

    console.log(existance);
    const trueFalse = existance.exists;

    return trueFalse;
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
 * Selects user by username
 * @param username
 * @returns {Promise<any[]|*>}
 */
const getUserByUserName = async (username) => {
  try {
    const user = await db.any(
      'SELECT * FROM "users" WHERE LOWER(username)=$1',
      [username]
    );

    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
};
module.exports = { insertNewUser, doesUserExist, getUserByUserName };
