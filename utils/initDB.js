const path = require('path');
const config = require('../config');

const InitializeDB = require('../db/InitializeDB');
InitializeDB(path.resolve(config.root, './db/models'));
