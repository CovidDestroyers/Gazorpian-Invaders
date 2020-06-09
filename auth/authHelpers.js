const bcrypt = require('bcryptjs');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const { insertNewUser, checkUserExists } = require('../data/queries/authSQL');

const createUser = async (req) => {
  const { username, password, confirmPassword } = req.body;
  const dateJoined = moment().format('MMMM Do YYYY, h:mm:ss a');
  const userId = uuidv4();
  const lowerCaseUsername = username.toLowerCase().trim();

  // TODO: do this check on the front end
  if (password !== confirmPassword) {
    throw new Error('Passwords do not match');
  }

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const insertedUser = await insertNewUser(
      userId,
      lowerCaseUsername,
      hashedPassword,
      dateJoined
    );

    return insertedUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const doesUserExist = async (username) => {
  try {
    const existance = await checkUserExists(username);
    console.log(existance);
    const trueFalse = existance.exists;

    return trueFalse;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { createUser, doesUserExist };
