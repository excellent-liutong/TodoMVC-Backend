const { v4 } = require('uuid');
const config = require('../config').dbConfig;
const Connection = require('../db/Connection');
const TodoModel = require('../db/models/Todo');

const TodoController = {};

const todoConnection = Connection(config);
const todoModel = TodoModel(todoConnection);


TodoController.getAllTodo = (todoInfo) => {
  return todoModel.findAll({
    where: {
      UserID: todoInfo.UserID,
    }
  });
}

TodoController.createTodo = (todoInfo) => {
  todoInfo.TodoID = v4();
  return todoModel.create(todoInfo);
}

TodoController.deleteTodo = (todoInfo) => {
  return todoModel.destroy({
    where: {
      UserID: todoInfo.UserID,
      TodoID: todoInfo.TodoID
    }
  });
}

TodoController.updateTodo = (todoInfo) => {
  return todoModel.update({
    TodoThing: todoInfo.TodoThing,
    Completed: todoInfo.Completed
  }, {
    where: {
      UserID: todoInfo.UserID,
      TodoID: todoInfo.TodoID
    }
  });
}


module.exports = TodoController;