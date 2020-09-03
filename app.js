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

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

const app = express();
app.use(methodOverride());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
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
// if (process.env.NODE_ENV === 'development') {
//   app.use(cors(corsOptions));
//   app.use(logger('development'));
// }
app.get('/', (req, res) => {
	res.send('Hello TodoMVC');
});
app.use('/user', UserRouter);
app.use('*', function (req, res, next) {
  console.log('redirect / index');
  res.redirect('/');
});

const server = http.createServer(app);
const port = process.env.PORT || '3001';
server.listen(port, () => {
  console.log('server on');
});

