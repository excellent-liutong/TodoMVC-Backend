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
    schema: 'invoice-prd',
    port: 3306, // Default port
    pool: {
      max: 5,
      min: 1,
      idle: 10000
    },
  },
};
module.exports = {
  root,
  dbConfig
};
