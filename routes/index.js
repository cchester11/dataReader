const router = require('express').Router()

const client_routes = require('./client_routes/clientSide')
const api_routes = require('./api_routes/index')

router.use('/', client_routes)
router.use('/api', api_routes)

module.exports = router;