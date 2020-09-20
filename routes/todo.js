const express = require('express');
const router = express.Router();
const TodoController = require('../controller/TodoController');
const { v4 } = require('uuid');
const config = require('../config').dbConfig;
const Connection = require('../db/Connection');
const TodoModel = require('../db/models/Todo');



const todoConnection = Connection(config);
const todoModel = TodoModel(todoConnection);


router

  // 查询
  .post('/getAllTodo', (req, res) => {
    const todoData = {
      UserID: req.body.UserID,
    };
    todoModel.findAll({
      where: {
        UserID: req.body.UserID
      }
    }).then(
      todo => {
        res.json({ status: todo })
      }).catch(err => {
        res.send('error: ' + err)
      })
  })


  // 创建
  .post('/createTodo', (req, res) => {
    const todoData = {
      TodoID: v4(),
      UserID: req.body.UserID,
      TodoThing: req.body.TodoThing,
      Completed: req.body.Completed
    };

    todoModel.create(todoData)
      .then(
        todo => {
          res.json({ status: todo })
        }).catch(err => {
          res.send('error: ' + err)
        })
  })

  // 删除
  .post('/deleteTodo', (req, res) => {
    const todoData = {
      TodoID: req.body.TodoID,
      UserID: req.body.UserID,
    };
    todoModel.destroy({
      where: {
        UserID: todoData.UserID,
        TodoID: todoData.TodoID
      }
    }).then(
      todo => {
        res.json({ status: todo })
      }).catch(err => {
        res.send('error: ' + err)
      })
  })

  //更新
  .post('/updateTodo', (req, res) => {
    const todoData = {
      TodoID: req.body.TodoID,
      UserID: req.body.UserID,
      TodoThing: req.body.TodoThing,
      Completed: req.body.Completed
    };
    todoModel.update({
      TodoThing: todoData.TodoThing,
      Completed: todoData.Completed
    }, {
      where: {
        UserID: todoData.UserID,
        TodoID: todoData.TodoID
      }
    }).then(
      todo => {
        res.json({ status: todo })
      }).catch(err => {
        res.send('error: ' + err)
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })


module.exports = router;