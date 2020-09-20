const path = require('path');

const express = require('express');
const compression = require('compression');
const http = require('http');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');

const UserRouter = require('./routes/user');
const TodoRouter = require('./routes/todo');
const TokenRouter = require('./routes/token');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

const expressJWT = require('express-jwt')
const vertoken = require('./utils/token_vertify.js');



const app = express();
app.use(methodOverride());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(expressSession(
  {
    secret: 'TodoMVC',
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 4 * 60 * 60 * 1000,
      secure: false
    }
  }));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.use(cors(corsOptions));
app.use(logger('development'));


// 解析token获取用户信息
app.use((req, res, next) => {
  var token = req.headers['authorization'];
  if (token == undefined) {
    return next();
  } else {
    vertoken.verToken(token).then((data) => {
      // 验证输出结果
      console.log('输出结果', data)
      req.data = data;
      return next();
    }).catch((error) => {
      return next();
    })
  }
});

let secretOrPrivateKey = 'myTodo'

//验证token是否过期并规定哪些路由不用验证
app.use(expressJWT({
  secret: secretOrPrivateKey,
  algorithms: ['HS256']
}).unless({
  path: ['/token', '/user/login', '/user/register', '/user/forgetPW', '/todo/createTodo', '/todo/deleteTodo', '/todo/updateTodo', '/todo/getAllTodo']//除了这个地址，其他的URL都需要验证
}));

//当token失效返回提示信息
app.use((err, req, res, next) => {
  if (err.status == 401) {
    return res.status(401).send('token失效');
  }
});



// 校验token失败时的处理
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  }
});



app.get('/', (req, res) => {
  res.send('Hello TodoMVC');
});

app.use('/token', TokenRouter);
app.use('/user', UserRouter);
app.use('/todo', TodoRouter);

app.use('*', function (req, res, next) {
  console.log('redirect / index');
  res.redirect('/');
});





const server = http.createServer(app);
const port = process.env.PORT || '3001';
server.listen(port, () => {
  console.log('server is running on port: ' + port);
});

