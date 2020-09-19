const express = require('express');
const router = express.Router();
const UseController = require('../controller/UserController');

router
  // .get('/', async (req, res) => {
  //   const userList = await UseController.loginUser(req.body);
  //   res.send(userList);
  // })


  .get('/test', async (req, res) => {
    res.send({ res: 'connect succ' });
  })

  // 注册
  .post('/register', async (req, res) => {
    UseController.createUser(req.body);
    res.send({
      req: req.body,
      res: 'connect succ and created user'
    });
  })

  // 注册
  .post('/login', async (req, res) => {
    const query = await UseController.loginUser(req.body);
    res.send({
      req: req.body,
      query
    });
  })

  .post('/changePW', async (req, res) => {
    UseController.changePW(req.body);
    res.send({
      req: req.body,
    });
  })




// .post('/', async (req, res) => {
//     console.log(req.body);
//     await UseController.createUser(req.body);
//     res.send({res: 'succ'});
// });



module.exports = router;