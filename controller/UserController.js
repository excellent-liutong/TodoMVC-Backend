
const {v4} = require('uuid');
const config = require('../config').dbConfig;
const Connection = require('../db/Connection');
const UserModel = require('../db/models/User');

const UserController = {};

const userConnection = Connection(config);
const userModel = UserModel(userConnection);

UserController.getAllUser = () => {
    return userModel.findAll();
}

UserController.createUser = (userInfo) => {
    userInfo.ID = v4();
    return userModel.create(userInfo);
}

module.exports = UserController;