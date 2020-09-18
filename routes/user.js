const express = require('express');
const router = express.Router();
const UseController = require('../controller/UserController');

router
    .get('/', async (req, res) => {
        const userList = await UseController.getAllUser();
        res.send(userList);
    })
    .get('/test', async (req, res) => {
        res.send({ res: 'connect succ' });
    })
    .post('/register', async (req, res) => {
        UseController.createUser(req.body);
        res.send({
            req: req.body,
            res: 'connect succ and created user'
        });
    })
    
    // 验证token
    .post('/vertify', async (req, res, next) => {
        console.log(req.data)
        if (req.data) {
            return res.json({
                msg: '身份验证成功'
            })
        }
        else {
            return res.json({
                msg: '未获取到用户信息'
            })
        }
        next();
    });


// .post('/', async (req, res) => {
//     console.log(req.body);
//     await UseController.createUser(req.body);
//     res.send({res: 'succ'});
// });



module.exports = router;