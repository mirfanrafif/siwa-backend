const { Transaksi, TransaksiDetail } = require('../models');
// const { TransaksiDetail } = require('../models/transaksidetail');

module.exports = {
    async index(req, res) {
        const transaksi = await Transaksi.findAll({
            include: ['kasir']
        });
        res.send(transaksi)
    },

    async find(req, res) {
        const transaksi = await Transaksi.findOne({
            where: {
                id: req.params.id
            },
            include: ['details', 'kasir']
        });
        res.send(transaksi)
    },

    async create(req, res) {
        Transaksi.create({
            'userid': req.body.userid
        }).then((result) => {
            var idTransaksi = result.id
            var menu = req.body.menu
            menu.forEach(data => {
                TransaksiDetail.create({
                    'transaksi_id': idTransaksi,
                    'menu_id': data.id,
                    'jumlah': data.jumlah
                }).then(() => { })
            });
            res.send(result)
        })
    },

    async update(req, res) {
        const result = await Transaksi.update({
            'userid': req.body.userid
        }, {
            where: {
                id: req.params.id
            }
        })

        res.send(result)
    },

    async delete(req, res) {
        const result = await Transaksi.destroy({
            where: {
                id: req.params.id
            }
        })

        res.send("Transaksi Record id" + req.params.id + "deleted.")
    }

}