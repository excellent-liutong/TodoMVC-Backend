const Sequelize = require('sequelize');

const Connection = (config) => {
  let sequelize = new Sequelize(config.database, config.username, config.password, config.options);
  return sequelize;
}

module.exports = Connection;