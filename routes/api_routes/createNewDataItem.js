const router = require('express').Router()
const data = require('../../data/index.json')

router.post('/createNewItem', (req, res) => {
      const itemNumber = req.itemNumber
      let map = [req.itemNumber]

      if(req.includes(index_of_two)) {
            console.log('yes')
      }
      map[itemNumber] = {
            'item': itemNumber,
            'appearances': req.appearances,
            'arrays_present': [req.arrays_present],
            'indexes': {
                  'index_of_one': [req.index_of_one],
                  'index_of_two': [req.index_of_two],
                  'arrays': [req.arrays]
            }
      }

      data.push(map)

      return res.json(data)
})