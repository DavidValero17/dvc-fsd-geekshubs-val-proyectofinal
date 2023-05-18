"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VideogamePlatform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      VideogamePlatform.belongsTo(models.Videogame, {
        foreignKey: "videogame_id",
      });
      VideogamePlatform.belongsTo(models.Platform, {
        foreignKey: "platform_id",
      });
    }
  }
  VideogamePlatform.init(
    {
      videogame_id: DataTypes.INTEGER,
      platform_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "VideogamePlatform",
    }
  );
  return VideogamePlatform;
};
