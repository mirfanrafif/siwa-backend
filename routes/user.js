const express = require('express')
const routes = express.Router()
const controller = require('../controller/authController')

routes.post('/register', controller.register)
routes.post('/login', controller.login)

module.exports = routes