const fs = require('fs');

const config = require('../config');
const travel = require('../utils/travel');
const Connection = require('./Connection');

const InitializeDB = (modelPath) => {
  const connection = Connection(config.dbConfig);
  if (fs.existsSync(modelPath)) {
    travel(modelPath, (filePath) => {
      const tempModel = require(filePath)(connection);
      tempModel.sync({force: true}).then(res => {
        console.log(res);
        console.log(`initial db: ${filePath} over`);
      })
    });
  }
}

module.exports = InitializeDB;