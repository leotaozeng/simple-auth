const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  name: String,
  email: {
    unique: true,
    type: String
  },
  password: String
})

// Exporting a Model
module.exports = mongoose.model('User', userSchema)
