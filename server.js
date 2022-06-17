const express = require('express')
const app = express()
const path = require('path')

const PORT = 3001

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