const express = require('express')
const app = express()
const path = require('path')
const data = require('./data/index.json')
const  { mapPattern } = require('./scripts/writeJSON')

const PORT = 3001

app.use(express.static(path.join(__dirname, 'public')))

app.get('/home', (req, res) => {
      res.sendFile(path.join(__dirname, './public/home.html'))
})
app.get('/data', (req, res) => {
      res.json(data)
})
app.get('/generate', (req, res) => {
      mapPattern.then(() => {
            res.json(data)
            return
      })
})

app.listen(PORT, (err) => {
      if(err) {
            throw new Error(err)
      } else {
            console.log('Listening on PORT ' + PORT)
      }
})
