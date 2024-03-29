'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Menu.hasMany(models.TransaksiDetail, { foreignKey: 'menu_id' })
    }
  }
  Menu.init({
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    url_gambar: DataTypes.STRING,
    jenis_menu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};