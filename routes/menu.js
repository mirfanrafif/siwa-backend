const express = require('express')
const routes = express.Router()
const controller = require('../controller/menuController')

routes.get('/', controller.index)
routes.post('/', controller.create)

module.exports = routes