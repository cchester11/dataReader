const router = require('express').Router()
const data = require('../../data/index.json')

router.get('/data', (req, res) => {
      try {
            res.json(data)
      } catch (err) {
            throw new Error(err)
      }
})

module.exports = router;