const {v4} = require('uuid');
const config = require('../config').dbConfig;
const Connection = require('../db/Connection');
const TodoModel = require('../db/models/Todo');

const TodoController = {};

const todoConnection = Connection(config);
const todoModel = TodoModel(todoConnection);


TodoController.getAllTodo = () => {
    return todoModel.findAll();
}

TodoController.createTodo = (todoInfo) => {   
    return todoModel.create(todoInfo);
}

TodoController.deleteTodo = (todoInfo) => {  
    return todoModel.destroy({
        where: {
            thing: todoInfo.Thing
        }
      });
}

TodoController.updateTodo = (todoInfo) => {  
    return todoModel.update({
        achieved:true
    },
    {
        where: {
            thing: todoInfo.Thing
        }
      });
}

module.exports = TodoController;