'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favorite.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      Favorite.belongsToMany(models.Videogame, {
        through: 'Favorites',
        foreignKey: 'favorite_id'
      });
    }
  }
  Favorite.init({
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};