const { v4 } = require('uuid');
const config = require('../config').dbConfig;
const Connection = require('../db/Connection');
const UserModel = require('../db/models/User');

const UserController = {};

const userConnection = Connection(config);
const userModel = UserModel(userConnection);

// 创建用户
UserController.createUser = (userInfo) => {
  userInfo.UserID = v4();
  return userModel.create(userInfo).catch(e => {
    console.log(e);
  });
}

//用户登录
UserController.loginUser = (userInfo) => {
  return userModel.findOne({
    where: {
      Name: userInfo.Name,
      Password: userInfo.Password
    }
  }).catch(e => {
    console.log(e);
  });
}

//用户修改密码
UserController.changePW = (userInfo) => {
  return userModel.update({
    Password: userInfo.Password
  }, {
    where: {
      Name: userInfo.Name
    }
  });
}


module.exports = UserController;