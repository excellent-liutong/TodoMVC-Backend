const fs = require('fs');
const path = require('path');

const travel = (filePath, callback) => {
  if (fs.statSync(filePath).isDirectory()) {
    fs.readdirSync(filePath).forEach(tempFile => {
      const tempFilePath = path.join(filePath, tempFile);
      travel(tempFilePath, callback);
    });
  } else {
    callback(filePath);
  }
};
module.exports = travel;