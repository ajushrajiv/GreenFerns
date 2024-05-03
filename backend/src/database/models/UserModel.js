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
    
  },
  { tableName: "User_tb" }
);

module.exports = UserModel;