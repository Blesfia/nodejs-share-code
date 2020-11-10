const express = require('express')
const roomController = require('./controllers/room.controller')
const healthcheckController = require('./controllers/healthcheck.controller')

const router = express.Router()
const apiV1 = express.Router()
router.use('/api/v1', apiV1)

router.get('/healthcheck', healthcheckController.healthcheck)
apiV1.post('/rooms', roomController.create)

module.exports = router
