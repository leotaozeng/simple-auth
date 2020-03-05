const express = require('express')
const router = express.Router()

const { verifyToken } = require('../middlewares/authJWT')
const controller = require('../controllers/roles')

router.get('/user', verifyToken, controller.getUserContent)

router.get('/mod', verifyToken, controller.getModeratorContent)

router.get('/admin', verifyToken, controller.getAdminContent)

module.exports = router
