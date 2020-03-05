const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10
const User = require('../models/user')
const { SECRET } = require('../config/auth')

// 校验密码是否正确
const validatePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compare(plainPassword, hashedPassword)
}

// 哈希加密
const hashPassword = password => {
  return bcrypt.hash(password, saltRounds)
}

/**
 * @desc 用户注册
 */
exports.register = async (req, res) => {
  try {
    const data = req.body
    const hashedPassword = await hashPassword(data.password)

    const user = new User({ ...data, password: hashedPassword })
    const accessToken = jwt.sign(
      { userId: user._id, role: user.role },
      SECRET,
      { expiresIn: '7d' }
    )

    await user.save()

    res.status(200).json({
      role: user.role,
      username: data.username,
      email: data.email,
      accessToken,
      expiresIn: 168
    })
  } catch (error) {
    res.status(400).json({
      message: 'Username or email has been taken'
    })
  }
}

/**
 * @desc 用户登录
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      // 用户不存在
      res.status(404).json({
        message: 'Email does not exist'
      })
    } else {
      // 用户存在
      const validPassword = await validatePassword(password, user.password)

      if (!validPassword) {
        // 密码错误
        res.status(400).json({
          message: 'Password is not correct'
        })
      } else {
        // 密码正确

        const accessToken = jwt.sign(
          { userId: user._id, role: user.role },
          SECRET,
          { expiresIn: '7d' }
        )

        res.status(200).json({
          role: user.role,
          username: user.username,
          email,
          accessToken,
          expiresIn: 168
        })
      }
    }
  } catch (error) {
    res.status(500).json({
      message: 'Server error'
    })
  }
}
