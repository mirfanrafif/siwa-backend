const { create } = require('lodash');
const { Menu } = require('../models')

module.exports = {
    async index(req, res) {
        const menu = await Menu.findAll({});
        res.send(menu)
    },

    async create(req, res) {
        const result = await Menu.create({
            'nama': req.body.nama,
            'harga': req.body.harga,
            'url_gambar': req.body.url_gambar
        })

        res.send(result)
    }

}