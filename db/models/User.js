const Sequelize = require('sequelize');
const UserModel = (sequelize) => {
  const User = sequelize.define('User', {
    ID: {
      type: Sequelize.DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    Email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: false,
    }
  }, {
    timestamps: true,
    underscored: false,
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  return User;
};
module.exports = UserModel;
