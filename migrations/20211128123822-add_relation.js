'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addConstraint('Transaksis', {
          fields: ['userid'],
          type: 'FOREIGN KEY',
          name: 'fk_transaksi_user',
          references: {
            table: 'Users',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }, { transaction: t }),
        queryInterface.addConstraint('TransaksiDetails', {
          type: 'FOREIGN KEY',
          name: 'fk_transaksidetail_menu',
          fields: ['menu_id'],
          references: {
            table: 'Menus',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }, { transaction: t }),
        queryInterface.addConstraint('TransaksiDetails', {
          type: 'FOREIGN KEY',
          name: 'fk_transaksidetail_transaksi',
          fields: ['transaksi_id'],
          references: {
            table: 'Transaksis',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }, { transaction: t }),
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeConstraint('Transaksis', ['fk_transaksi_user'], { transaction: t }),
        queryInterface.removeConstraint('TransaksiDetails', ['fk_transaksidetail_menu'], { transaction: t }),
        queryInterface.removeConstraint('TransaksiDetails', ['fk_transaksidetail_transaksi'], { transaction: t }),
      ])
    })
  }
};
