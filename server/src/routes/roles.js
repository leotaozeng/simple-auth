const express = require('express')
const router = express.Router()

const authJWT = require('../middlewares/authJWT')
const controller = require('../controllers/roles')

router.get('/user', authJWT.verifyToken, controller.getUserContent)

router.get(
  '/mod',
  [authJWT.verifyToken, authJWT.isModerator],
  controller.getModeratorContent
)

router.get(
  '/admin',
  [authJWT.verifyToken, authJWT.isAdmin],
  controller.getAdminContent
)

module.exports = router
