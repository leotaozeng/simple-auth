const express = require('express')
const cors = require('cors')

require('./src/database')

const authRouter = require('./src/routes/auth')
const userRouter = require('./src/routes/user')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
