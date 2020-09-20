const path = require('path');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const root = path.resolve(__dirname, '../');

const dbConfig = {
  username: 'root',
  password: 'root',
  database: 'todomvc',
  options: {
    host: '39.97.225.102',
    dialect: 'mysql',
    port: 3306, // Default port
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    // retry: {
    //   match: [
    //     /ETIMEDOUT/,
    //     /EHOSTUNREACH/,
    //     /ECONNRESET/,
    //     /ECONNREFUSED/,
    //     /ETIMEDOUT/,
    //     /ESOCKETTIMEDOUT/,
    //     /EHOSTUNREACH/,
    //     /EPIPE/,
    //     /EAI_AGAIN/,
    //     /SequelizeConnectionError/,
    //     /SequelizeConnectionRefusedError/,
    //     /SequelizeHostNotFoundError/,
    //     /SequelizeHostNotReachableError/,
    //     /SequelizeInvalidConnectionError/,
    //     /SequelizeConnectionTimedOutError/
    //   ],
    //   max: 5
    // }
  },
};
module.exports = {
  root,
  dbConfig
};
