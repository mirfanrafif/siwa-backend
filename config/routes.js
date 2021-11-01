const express = require('express')
const routes = express.Router()

routes.use("/menu", require('../routes/menu'));

module.exports = routes