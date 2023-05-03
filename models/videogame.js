"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Videogame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Videogame.belongsTo(models.Developer, {
        foreignKey: "developer_id",
      });
      Videogame.hasMany(models.Favorite, {
        foreignKey: 'videogame_id'
      });
      Videogame.belongsToMany(models.Platform, {
        through: "VideogamePlatforms",
        foreignKey: "videogame_id",
      });
    }
  }
  Videogame.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.TEXT,
      genre: DataTypes.STRING,
      year: DataTypes.INTEGER,
      multiplayer: DataTypes.BOOLEAN,
      online: DataTypes.BOOLEAN,
      developer_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Videogame",
    }
  );
  return Videogame;
};
