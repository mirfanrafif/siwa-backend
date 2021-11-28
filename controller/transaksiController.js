const { create } = require('lodash');
const { Transaksi, TransaksiDetail } = require('../models');
// const { TransaksiDetail } = require('../models/transaksidetail');

module.exports = {
    async index(req, res) {
        const transaksi = await Transaksi.findAll({});
        res.send(transaksi)
    },

    async find(req, res) {
        const transaksi = await Transaksi.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(transaksi)
    },

    async create(req, res){
        Transaksi.create({
            'userid': req.body.userid
        }).then((result) => {
            var idTransaksi = result.id
            console.log("ID Transaksi : " + idTransaksi)
            var menu = req.body.menu
            console.log(menu)
            menu.forEach(data => {
                console.log(data)
                TransaksiDetail.create({
                    'transaksi_id': idTransaksi,
                    'menu_id': data.id,
                    'jumlah': data.jumlah
                }).then(() => {})
            });
            res.send(result)
        })
    },

    async update(req, res) {
        const result = await Transaksi.update({
            'userid': req.body.userid
        }, { where: {
                id: req.params.id
            }
        })

        res.send(result)
    },

    async delete(req, res){
        const result = await Transaksi.destroy({
            where: {
                id: req.params.id 
            }
        })

        res.send("Transaksi Record id" + req.params.id + "deleted.")
    }

}