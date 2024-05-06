const { DataTypes } = require("sequelize");
const GreenFernsSequelize = require("../setup/database");

// Define the Todo model
const PlantModel = GreenFernsSequelize.define(
  "plants",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    plantName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plantDescription: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
      },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description_two: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
    },
    detailed_description: {
      type: DataTypes.TEXT('medium'),
      allowNull: false,
    },
    plantSummary: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    plantImgUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { tableName: "plant_tb" }
);

module.exports = plantModel;
