const express = require('express')
const app = express()
const path = require('path')
const data = require('./data/index.json')

const PORT = 3001

console.log(data);

app.use(express.static(path.join(__dirname, 'public')))
// app.get('/', (req, res) => {
//       res.sendFile(path.join(__dirname, './index.html'))
// })

app.listen(PORT, (err) => {
      if(err) {
            throw new Error(err)
      } else {
            console.log('Listening on PORT ' + PORT)
      }
})

app.get('/data', (req, res) => {
      res.json(data)
})
