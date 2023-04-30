'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VideogamePlatform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VideogamePlatform.init({
    game_id: DataTypes.INTEGER,
    platform_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VideogamePlatform',
  });
  return VideogamePlatform;
};