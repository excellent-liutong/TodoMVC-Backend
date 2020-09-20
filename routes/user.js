const express = require('express');
const router = express.Router();
const { v4 } = require('uuid');
const config = require('../config').dbConfig;
const Connection = require('../db/Connection');
const UserModel = require('../db/models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userConnection = Connection(config);
const userModel = UserModel(userConnection);

process.env.SECRET_KEY = 'myTodo'
router
  // .get('/', async (req, res) => {
  //   const userList = await UseController.loginUser(req.body);
  //   res.send(userList);
  // })


  .get('/test', async (req, res) => {
    res.send({ res: 'connect succ' });
  })

  // 注册
  .post('/register', (req, res) => {
    let userInfo = req.body;

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
                .then(user => {
                  res.json({ status: user })
                }).catch(err => {
                  res.send('error: ' + err)
                });
            })
          } else {
            // console.log('该用户名已被注册')
            return res.json({ error: "该用户名已被注册" })
          }

        })
      .catch(err => {
        res.send('error: ' + err)
        // console.log(err)
      });

  })

  // 注册
  .post('/login', (req, res) => {
    userInfo = req.body
    userModel.findOne({
      where: {
        Name: userInfo.Name,
      }
    })
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(userInfo.Password, user.Password)) {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.send(token)
          }
          else {
            res.status(400).json({ error: "密码错误，请重新输入" })
          }
        } else {
          res.status(400).json({ error: "该用户不存在" })
        }
      })
      .catch(err => {
        res.status(400).json({ error: err })
        console.log(err);
      });
  })


  // 忘记密码
  .post('/forgetPW', (req, res) => {
    userInfo = req.body
    userModel.findOne({
      where: {
        Name: userInfo.Name
      }
    })
      .then(user => {
        if (user) {
          console.log('旧密码：', user.Password)
          bcrypt.hash(userInfo.Password, 10, (err, hash) => {
            userModel.update({
              Password: hash
            }, {
              where: {
                UserID: user.UserID,
              }
            });
            console.log('新密码：', user.Password)
            res.json({
              status: '用户 ' + user.Name + ' 已成功修改密码',
              newPW: hash
            })
          })
        }
        else {
          res.status(400).json({ error: "该用户不存在" })
        }
      })
      .catch(err => {
        res.status(400).json({ error: err })
        console.log(err);
      })
  })




module.exports = router;