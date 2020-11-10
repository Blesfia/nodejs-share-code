const express = require('express')
const environment = require('./environment')
const router = require('./router')

const app = express()
app.use(router)

app.listen(environment.PORT, environment.HOST)

module.exports = app
