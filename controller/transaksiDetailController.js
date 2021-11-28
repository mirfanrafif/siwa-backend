const { TransaksiDetail } = require('../models')

module.exports = {
    async index(req, res) {
        const Transaksi = await TransaksiDetail.findAll({});
        res.send(Transaksi)
    },

    async find(req, res) {
        const Transaksi = await TransaksiDetail.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(Transaksi)
    },

    async create(req, res) {
        const result = await TransaksiDetail.create({
            'transaksi_id': req.body.transaksi_id,
            'menu_id': req.body.menu_id,
            'jumlah': req.body.jumlah
        })

        res.send(result)
    },

    async update(req, res) {
        const result = await TransaksiDetail.update({
            'transaksi_id': req.body.transaksi_id,
            'menu_id': req.body.menu_id,
            'jumlah': req.body.jumlah
        }, { where: {
                id: req.params.id
            }
        })

        res.send(result)
    },

    async delete(req, res){
        const result = await TransaksiDetail.destroy({
            where: {
                id: req.params.id 
            }
        })

        res.send("TransaksiDetail Record id" + req.params.id + "deleted.")
    }

}