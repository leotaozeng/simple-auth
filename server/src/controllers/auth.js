const User = require('../models/user')

const jwt = require('jsonwebtoken')
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
  const { email, password } = req.body

  User.findOne({ email })
    .then(user => {
      console.log(user)
      if (!user) {
        // 用户不存在
        res.status(400).json({
          title: 'error',
          message: 'wrong email'
        })
      } else {
        // 用户存在，匹配密码是否相等
        bcrypt.compare(password, user.password, (err, result) => {
          if (!result) {
            // 密码错误
            res.status(400).json({
              title: 'login failed',
              message: 'wrong password'
            })
          } else {
            // 密码正确
            // 创建 JWT 字符串
            const token = jwt.sign({ userId: user._id }, 'secretkey')

            res.status(200).json({
              title: 'success',
              user: {
                id: user._id,
                username: user.username,
                email: user.email,
                accessToken: token
              }
            })
          }
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        title: 'server error',
        message: err
      })
    })
}

exports.logout = (req, res) => {
  console.log(req.body)
}
