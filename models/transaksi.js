'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaksi.belongsTo(models.User, { foreignKey: 'userid', as: 'kasir' })
      Transaksi.hasMany(models.TransaksiDetail, { foreignKey: 'transaksi_id', as: 'details' })
    }
  }
  Transaksi.init({
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaksi',
  });
  return Transaksi;
};