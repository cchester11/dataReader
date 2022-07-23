const router = require('express').Router()
const  { mapPattern } = require('../../scripts/writeJSON')

router.get('/generate', (req, res) => {
      mapPattern()
      res.json(data)
})

module.exports = router;