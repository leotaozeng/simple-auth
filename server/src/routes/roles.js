const express = require('express')
const router = express.Router()

const controller = require('../controllers/roles')

router.get('/user', controller.getUserContent)

router.get('/mod', controller.getModeratorContent)

router.get('/admin', controller.getAdminContent)

module.exports = router
