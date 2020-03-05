const express = require('express')
const cors = require('cors')
const { success } = require('consola')
const { PORT } = require('./src/config')
const app = express()

require('./src/database')

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Router Middleware
app.use(require('./src/routes'))
app.use('/api/auth', require('./src/routes/auth'))
app.use('/api/roles', require('./src/routes/roles'))

app.listen(PORT, () =>
  success({
    message: `Server listening on port ${PORT}`,
    badge: true
  })
)
