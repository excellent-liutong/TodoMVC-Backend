var express = require('express');
var router = express.Router();
var settoken = require('../utils/token_vertify.js');

// 根据前端传入的用户名和密码，后端生成token

router.post('/', (req, res) => {
  let userName = req.body.Name;
  settoken.setToken(userName).then((data) => {
    return res.json({ token: data });
  })
  // return next();
});


// 验证token
router.post('/vertify', async (req, res, next) => {
  console.log(req.data)
  if (req.data) {
    return res.json({
      msg: '身份验证成功',
      userName: req.data.userName
    })
  }
  else {
    return res.json({
      msg: '未获取到用户信息'
    })
  }
  next();
});


module.exports = router;