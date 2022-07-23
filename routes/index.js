const router = require('express').Router()

const client_routes = require('./client_routes/clientSide')
const api_routes_generateData = require('./api_routes/generateData')
const api_routes_getData = require('./api_routes/getData')

router.use('/', client_routes)
router.use('/api', api_routes_generateData)
router.use('/api', api_routes_getData)

module.exports = router;