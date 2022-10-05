'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhotoFlat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Flat, { foreignKey: 'flatId' });
    }
  }
  PhotoFlat.init({
    flatId: DataTypes.INTEGER,
    photoLink: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'PhotoFlat',
  });
  return PhotoFlat;
};