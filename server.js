const express = require('express')
const app = express()
const path = require('path')
const chokidar = require('chokidar')
const data = require('./data/index.json')
const  { mapPattern } = require('./scripts/writeJSON')

const watcher = chokidar.watch('./data/index.json', {
      persistent: true
})
const log = console.log.bind(console)

const PORT = 3001

app.use(express.static(path.join(__dirname, 'public')))

app.get('/home', (req, res) => {
      res.sendFile(path.join(__dirname, './public/home.html'))
})
app.get('/generate', (req, res) => {
      mapPattern()
      res.json(data)
})
app.get('/data', (req, res) => {
      res.json(data)
})

// if data changes restart the server
// code here
watcher.on('change', (path) => { log(`File ${path} has been changed`)})
// watcher.on('all', () => {
//       server.close()
// })

const server = app.listen(PORT, (err) => {
      if(err) {
            throw new Error(err)
      } else {
            console.log('Listening on PORT ' + PORT)
      }
})
