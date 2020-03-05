const express = require('express')
const router = express.Router()

const controller = require('../controllers/roles')

router.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept'
  )
  next()
})

router.get('/user', controller.getUserContent)

router.get('/mod', controller.getModeratorContent)

router.get('/admin', controller.getAdminContent)

module.exports = router
