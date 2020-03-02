const express = require('express')
const router = express.Router()

const controller = require('../controllers/user')

router.get('/all', controller.getAll)

module.exports = router
