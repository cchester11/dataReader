// server dependencies
const express = require('express')
const app = express()
const path = require('path')
const chokidar = require('chokidar')
const dotenv = require('dotenv')

// load environment variables from env file
dotenv.config()

// tell the watcher library to keep an eye on the index.json file
const watcher = chokidar.watch('./data/index.json', {
      persistent: true
})
const log = console.log.bind(console)

// environment variables
const PORT = process.env.PORT
const IP = process.env.IP
const NODE_ENV = process.env.NODE_ENV
const IS_LOCAL = NODE_ENV === 'local'

// server will upload routes and use the public directory html and js files
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

if(IS_LOCAL) {
      // if running locally
      app.listen(3001, (err) => {
            if(err) {
                  throw new Error(err)
            }

            console.log('running locally')
      })
} else {
      // if running on railway service
      app.listen(PORT, IP, (err) => {
            if(err) {
                  throw new Error(err)
            } else {
                  console.log('Listening on PORT ' + PORT)
            }
      });
};