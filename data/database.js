require('dotenv');

const Promise = require('bluebird');
// eslint-disable-next-line import/order
const connection = require('./connect');

const initOptions = {
  promiseLib: Promise,
  // eslint-disable-next-line no-unused-vars
  connect(client, dc) {
    const cp = client.connectionParameters;
    console.log('Connecting to database:', cp.database);
  },
  // eslint-disable-next-line no-unused-vars
  disconnect(client, dc) {
    const cp = client.connectionParameters;
    console.log('Disconnecting from database:', cp.database);
  }
};

const monitor = require('pg-monitor');

monitor.attach(initOptions);
monitor.setTheme('matrix');

const pgp = require('pg-promise')(initOptions);

const db = pgp(connection);

module.exports = {
  db
};
