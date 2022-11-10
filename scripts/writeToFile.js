const fs = require('fs')

const writeToFile = function (data) {
      fs.writeFile('./data/index.json', data, err => {
            if (err) {
                  throw new Error(err)
            }
            console.log('generate data button activated. new data stored in data/index.json')
      })
};

module.exports = { writeToFile };