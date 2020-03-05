const jwt = require('jsonwebtoken')
const { SECRET } = require('../config/auth')

exports.verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization']

  if (!bearerHeader) {
    return res.status(403).send({ message: 'No token provided!' })
  }

  jwt.verify(bearerHeader, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' })
    }

    req.userId = decoded.userId

    next()
  })
}
