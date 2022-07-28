const router = require('express').Router()
const  { mapPattern } = require('../../scripts/writeJSON')
const { data } = require('../../data/index.json')

router.get('/generate', (req, res) => {
      mapPattern()
      res.json(data)
})

module.exports = router;