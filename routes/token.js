var express = require('express');
var router = express.Router();
var settoken = require('../utils/token_vertify.js');

// 根据前端传入的用户名和密码，后端生成token

router.post('/', function (req, res) {
  let username = req.body.name;
  let password = req.body.password;
  settoken.setToken(username, password).then((data) => {
    return res.json({ token: data });
  })
  // return next();
});

module.exports = router;