const mongoose = require('mongoose')

const server = 'Leo:db19950723@cluster0-kklui.mongodb.net' // REPLACE WITH YOUR DB SERVER
const database = 'auth' // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  }

  _connect() {
    mongoose
      .connect(`mongodb+srv://${server}/${database}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
      .then(() => console.log('Database connection successful'))
      .catch(err => console.error('Database connection error'))
  }
}

module.exports = new Database()
