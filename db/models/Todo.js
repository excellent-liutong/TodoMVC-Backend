const Sequelize = require('sequelize');
const TodoModel = (sequelize) => {
  const Todo = sequelize.define('Todo', {
    // 序号
    Order: {
      type: Sequelize.DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },
    // 主键
    UserID: {
      type: Sequelize.DataTypes.STRING,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    // 用户名
    Name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    // 待办事项
    TodoThing: {
      type: Sequelize.DataTypes.STRING,
    },
    // 是否完成
    Completed: {
      type: Sequelize.DataTypes.BOOLEAN,
    }

  }, {
    timestamps: true,
    underscored: false,
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  return Todo;
};
module.exports = TodoModel;
