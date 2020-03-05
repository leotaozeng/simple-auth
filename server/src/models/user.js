const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: ['user', 'admin', 'moderator']
  }
})

// Exporting a Model
module.exports = model('User', userSchema)
