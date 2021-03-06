const express = require('express')
const app = express()
const path = require('path')
const chokidar = require('chokidar')

const watcher = chokidar.watch('./data/index.json', {
      persistent: true
})
const log = console.log.bind(console)

const PORT = 3001

app.use(require('./routes'))
app.use(express.static(path.join(__dirname, 'public')))

// if data changes restart the server
watcher.on('change', (path) => { log(`File ${path} has been changed`)})
// watcher.on('change', () => {
//       server.close(() => {
//             log('Server Restarting...')
//             const server = express()
//             server.listen(PORT, () => {
//                   log(`Resarted. Listening on PORT ${PORT}`)
//             })
//       })
// })

const server = app.listen(PORT, (err) => {
      if(err) {
            throw new Error(err)
      } else {
            console.log('Listening on PORT ' + PORT)
      }
})
