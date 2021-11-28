const { User } = require('../models')
const jwt = require('jsonwebtoken')

module.exports = {
    async login(req, res) {
        User.findAll({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        }).then((row) => {
            if (row.length > 0) {
                const userData = {
                    id: row[0].id,
                    nama: row[0].nama,
                    username: row[0].username,
                    level: row[0].level
                }
                jwt.sign(JSON.stringify(userData), "sebuahsecret", (err, token) => {
                    if (err) {
                        res.send(err)
                    } else {
                        userData.token = token
                        res.send(userData)
                    }
                })
            } else {
                res.status(404).send('Not Found')
            }
        })



    },

    async register(req, res) {
        const userData = await User.create(req.body)

        res.send(userData)
    }
}