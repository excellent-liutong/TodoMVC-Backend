var jwt = require('jsonwebtoken');
var signkey = 'myTodo';


// token 生成
exports.setToken = (userName) => {
  console.log('用户名：', userName)
  return new Promise((resolve, reject) => {
    const token = jwt.sign({
      userName,
    }, signkey, { expiresIn: '24h' });
    resolve(token);
  })
}

// token 解析
exports.verToken = (token) => {
  return new Promise((resolve, reject) => {
    let info = jwt.verify(token.split(' ')[1], signkey);
    resolve(info);
  })
}

// 解码 token (验证 secret 和检查有效期（exp）)

// jwt.verify(token, 'suiyi',  (err, decoded) =>{
//   if (err) {
//     return res.status(400).send(next(createError(400, '无效的token')));
//   } else {
//     // 如果验证通过，在req中写入解密结果
//     console.log(decoded)//{ userId: 31, iat: 1574244315, exp: 1574330715 }
//     req.decoded = decoded;
//     next();
//   }
// }
// )