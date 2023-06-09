"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Developer.hasMany(models.Videogame, {
        foreignKey: "developer_id",
      });
    }
  }
  Developer.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      year: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Developer",
    }
  );
  return Developer;
};
