const express = require('express')
const router = express.Router()

const controller = require('../controllers/user')

router.get('/all', controller.getAll)

router.get('/mod', controller.getModeratorBoard)

router.get('/admin', controller.getAdminBoard)

module.exports = router
