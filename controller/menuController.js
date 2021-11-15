const { create } = require('lodash');
const { Menu } = require('../models')

module.exports = {
    async index(req, res) {
        const menu = await Menu.findAll({});
        res.send(menu)
    },

    async find(req, res) {
        const menu = await Menu.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(menu)
    },

    async create(req, res) {
        const result = await Menu.create({
            'nama': req.body.nama,
            'harga': req.body.harga,
            'url_gambar': req.body.url_gambar
        })

        res.send(result)
    },

    async update(req, res) {
        const result = await Menu.update({
            'nama': req.body.nama,
            'harga': req.body.harga,
            'url_gambar': req.body.url_gambar
        }, { where: {
                id: req.params.id
            }
        })

        res.send(result)
    },

    async delete(req, res){
        const result = await Menu.destroy({
            where: {
                id: req.params.id 
            }
        })

        res.send("ok")
    }

}