const mongoose = require('mongoose')
const { success, error } = require('consola')
const { SERVER, DATABASE } = require('../config/database')

class Database {
  constructor() {
    this._connect()
  }

  async _connect() {
    try {
      // 连接数据库
      await mongoose.connect(`mongodb+srv://${SERVER}/${DATABASE}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
      })

      success({
        message: `Database ${DATABASE} connection successful`,
        badge: true
      })
    } catch (err) {
      error({
        message: `Database connection error \n${err}`,
        badge: true
      })
    }
  }
}

module.exports = new Database()
