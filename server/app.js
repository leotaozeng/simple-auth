const express = require('express')
const cors = require('cors')
const { success } = require('consola')
const { PORT } = require('./src/config')
const app = express()

require('./src/database')

app.use(cors())

// parse requests of content-type - application/json
app.use(express.json())

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// Router Middleware
app.use('/api', require('./src/routes'))
app.use('/api/auth', require('./src/routes/auth'))
app.use('/api/roles', require('./src/routes/roles'))

app.listen(PORT, () =>
  success({
    message: `Server listening on port ${PORT}`,
    badge: true
  })
)
