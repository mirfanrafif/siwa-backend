const { Transaksi } = require('../models')

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

    async create(req, res) {
        const result = await Transaksi.create({
            'userid': req.body.userid
        })

        res.send(result)
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