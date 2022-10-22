const router = require('express').Router()
const  { mapPattern } = require('../../scripts/writeJSON')
// delete line below
const { data } = require('../../data/index.json')

router.get('/generate', (req, res) => {
      // const data = mapPattern()
      // res.send(data)
      mapPattern()
      res.json(data)
})

module.exports = router;