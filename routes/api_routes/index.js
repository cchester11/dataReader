const router = require('express').Router()

const generateData = require('./generateData')
const getData = require('./getData')

router.use('/', generateData)
router.use('/', getData)

module.exports = router;