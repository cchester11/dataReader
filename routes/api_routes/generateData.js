const router = require('express').Router()
const  { mapPattern } = require('../../scripts/writeJSON')

router.get('/generate', (req, res) => {
      const data = mapPattern()
      res.send(data)
})

module.exports = router;