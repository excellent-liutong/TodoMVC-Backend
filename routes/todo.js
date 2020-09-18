const express = require('express');
const router = express.Router();
const TodoController = require('../controller/TodoController');

router
    .get('/', async (req, res) => {
        const userList = await UseController.getAllUser();
        res.send(userList);
    })
    .get('/test', async (req, res) => {
        res.send({ res: 'connect succ' });
    })
    .post('/test', async (req, res) => {
        TodoController.createTodo(req.body);
        res.send({
            res: 'connect succ，create succ',
            req: req.body,
        });
    })
    .post('/deleteTodo', async (req, res) => {
        TodoController.deleteTodo(req.body);
        res.send({
            res: 'connect succ,delete succ',
            req: req.body,
        });
    })
    .post('/updateTodo', async (req, res) => {
        TodoController.updateTodo(req.body);
        res.send({
            res: 'connect succ,update succ',
            req: req.body,
        });
    })

// .post('/', async (req, res) => {
//     console.log(req.body);
//     await UseController.createUser(req.body);
//     res.send({res: 'succ'});
// });



module.exports = router;