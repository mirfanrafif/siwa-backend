const { create } = require('lodash');
const { Transaksi } = require('../models');
const { TransaksiDetail } = require('../models/transaksidetail');

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
                'userid': req.body.userid
            }).then(res => {
                id = res.id
                TransaksiDetail.bulkCreate({
                    'transaksi_id': id,
                    'menu_id': req.menu.id,
                    'jumlah': menu.jumlah
                }, {returning: true})
            })
    
            res.send("ok")
        } catch (error) {
            console.log(error)
        }
    },

    // async create(req, res) {
    //     try {
    //         const result = await Transaksi.create({
    //             'userid': req.body.userid}).then(res => {
    //                 id = req.body.transaksi_id
    //                 result = res
    //                 result.menu = []
    //                 req.body.menu.forEach(data => {
    //                     TransaksiDetail.create({
    //                         'transaksi_id': id,
    //                         'menu_id': data.id,
    //                         'jumlah': data.jumlah
    //                     }).then(tdres => {
    //                         result.menu.push(tdres)
    //                 })
    //             })
    //         }).finally(() => {
    //             res.send(result)
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },

    // async createTransaksiDetail(req, res){
    //     const result = await TransaksiDetail.create({
    //         'transaksi_id': req.body.transaksi_id,
    //         'menu_id': req.body.menu_id,
    //         'jumlah': req.body.jumlah
    //     })

    //     res.send(result)
    // },

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