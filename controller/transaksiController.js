const { create } = require('lodash');
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

    // async create(req, res) {
    //     const result = await Transaksi.create({
    //         'userid': req.body.userid
    //     })

    //     res.send(result)
    // },

    async create(req, res) {
        try {
            const result = await Transaksi.create({
                'userid': req.body.userid}).then(res => {
                    id = req.body.transaksi_id
                    result = res
                    result.menu = []
                    req.body.menu.forEach(data => {
                        await TransaksiDetail.create({
                            'transaksi_id': id,
                            'menu_id': data.id,
                            'jumlah': data.jumlah
                        }).then(tdres => {
                            result.menu.push(tdres)
                    })
                })
            }).finally(() => {
                res.send(result)
            })
        } catch (error) {
            console.log(error)
        }
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