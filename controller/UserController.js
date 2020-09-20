const { v4 } = require('uuid');
const config = require('../config').dbConfig;
const Connection = require('../db/Connection');
const UserModel = require('../db/models/User');
const bcrypt = require('bcrypt')
const UserController = {};

const userConnection = Connection(config);
const userModel = UserModel(userConnection);

// 创建用户
UserController.createUser = (userInfo) => {
  const userData = {
    Name: userInfo.Name,
    UserID: v4()
  };

  userModel.findOne({
    where: {
      Name: userInfo.Name,
    }
  })
    .then(
      user => {
        if (!user) {
          bcrypt.hash(userInfo.Password, 10, (err, hash) => {
            userData.Password = hash
            // 创建用户
            return userModel.create(userData)
            // .then(user => {
            //   res.json({ status: user.Name + ' 已成功注册' })
            // }).catch(err => {
            //   res.send('error: ' + err)
            // });
          })
        } else {
          console.log('该用户名已被注册')
          // return res.json({ error: "该用户名已被注册" })
        }

      })
    .catch(err => {
      // res.send('error: ' + err)
      console.log(err)
    });

  // return userModel.create(userData).then(user => {
  //   res.json({ status: user.Name + ' registered' })
  // }).catch(e => {
  //   console.log(e);
  // });
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