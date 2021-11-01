const Menu = require('../models/menu')

module.exports = {
    index(req, res) {
        const menu = Menu.findAll();
        res.send(JSON.stringify(menu))
    }
}