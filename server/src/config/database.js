require('dotenv').config()

module.exports = {
  SERVER: process.env.APP_DATABASE_SERVER,
  DATABASE: process.env.APP_DATABASE_NAME
}
