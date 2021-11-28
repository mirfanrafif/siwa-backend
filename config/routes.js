const express = require('express')
const routes = express.Router()

routes.use("/menu", require('../routes/menu'));
routes.use("/transaksi", require('../routes/transaksi'));
routes.use("/auth", require('../routes/user'));
module.exports = routes