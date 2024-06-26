const { DataTypes } = require("sequelize");
const userSequelize = require("../setup/database");

// Define the Todo model
const UserModel = userSequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImgUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { 
    tableName: "User_tb",
    defaultScope: { attributes: { exclude:["password"] } },
    scopes: {
      allData: { attributes: { exclude: [] } },
    }
  }
);

module.exports = UserModel;