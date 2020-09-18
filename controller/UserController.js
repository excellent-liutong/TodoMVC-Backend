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
    userInfo.UserID = v4();
    userInfo.Name = userInfo.name;
    userInfo.Password=userInfo.password
    return userModel.create(userInfo).catch(e => {
        console.log(e);
    });
}

module.exports = UserController;