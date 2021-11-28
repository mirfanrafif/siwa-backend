'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransaksiDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TransaksiDetail.belongsTo(models.Transaksi)
      TransaksiDetail.belongsTo(models.Menu)
    }
  }
  TransaksiDetail.init({
    transaksi_id: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TransaksiDetail',
  });
  return TransaksiDetail;
};