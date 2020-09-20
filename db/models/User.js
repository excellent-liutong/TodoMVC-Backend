const Sequelize = require('sequelize');
const UserModel = (sequelize) => {
  const User = sequelize.define('User', {
    // 序号
    Order: {
      type: Sequelize.DataTypes.INTEGER,
      unique: true,
      autoIncrement: true
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
    // 密码
    Password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    }
  },
    {
      timestamps: true,
      underscored: false,
      freezeTableName: true,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  return User;
};


module.exports = UserModel;
