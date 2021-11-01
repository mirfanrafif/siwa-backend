const express = require('express')
const router = express.Router()

router.use("menu", require('../controller/menuController'))

module.exports = router