const User = require('../models/user')
const bcrypt = require('bcrypt')
const saltRounds = 10

exports.register = (req, res) => {
  const user = new User(req.body)

  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) throw err
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) throw err

      user.password = hash
      user
        .save()
        .then(() => {
          res.status(200).json({
            title: 'success'
          })
        })
        .catch(() => {
          res.status(400).json({
            title: 'error',
            message: 'email in use'
          })
        })
    })
  })
}

exports.login = (req, res) => {
  console.log(req.body)
}

exports.logout = (req, res) => {
  console.log(req.body)
}
