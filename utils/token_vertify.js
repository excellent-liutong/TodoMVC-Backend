var jwt = require('jsonwebtoken');
var signkey = 'myTodo';


// token 生成
exports.setToken = (username, password) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({
      name: username,
      password: password
    }, signkey, { expiresIn: '24h' });
    resolve(token);
  })
}

// token 解析
exports.verToken = (token) => {
  return new Promise((resolve, reject) => {
    var info = jwt.verify(token.split(' ')[1], signkey);
    resolve(info);
  })
}