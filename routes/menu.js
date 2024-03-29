const express = require('express')
const routes = express.Router()
const controller = require('../controller/menuController')

// routes.use(require('../middleware/verifyToken'))
routes.get('/', controller.index)
routes.post('/', controller.create)
routes.get("/:id", controller.find)
routes.put("/:id", controller.update)
routes.delete("/:id", controller.delete)

module.exports = routes