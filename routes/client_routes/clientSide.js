const router = require('express').Router()
const path = require('path')

router.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../../public/home.html'))
})
router.get('/index', (req, res) => {
      res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router;