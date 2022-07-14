const fs = require('fs')

const arrayOne = Array.from({length: 50}, () => Math.floor(Math.random() * 100))
const arrayTwo = Array.from({length: 50}, () => Math.floor(Math.random() * 100))

const mapPattern = (one, two) => {
      let map = {}

      for(let i = 0; i < one.length; i ++) {
            let curr = one[i]

            if(curr in map) {
                  map[curr].appearances ++
                  map[curr].indexes.index_of_one.push(i)
            } else {
                  map[curr] = {
                        'item': curr,
                        'appearances': 1,
                        'arrays_present': ['one'],
                        'indexes': {
                              'index_of_one': [i],
                              'index_of_two': [],
                              'arrays': ['one']
                        }
                  }
            }
      }

      for(let i = 0; i < two.length; i ++) {
            let curr = two[i]

            if(map[curr]) {
                  map[curr].appearances ++
                  map[curr].arrays_present.push('two')
                  map[curr].indexes.index_of_two.push(i)
                  map[curr].indexes.arrays.push('two')
            } else {
                  map[curr] = {
                        'item': curr,
                        'appearances': 1,
                        'arrays_present': ['two'],
                        'indexes': {
                              'index_of_one': [],
                              'index_of_two': [i],
                              'arrays': ['two']
                        }
                  }
            }
      }

      for(let key in map) {
            if(map[key].arrays_present.length >= 3) {
                  while(map[key].arrays_present.length >= 3) {
                        map[key].arrays_present.pop()
                  }
            }
      }
      for(let key in map) {
            if(map[key].indexes.arrays.length >= 3) {
                  while(map[key].indexes.arrays.length >= 3) {
                        map[key].indexes.arrays.pop()
                  }
            }
      }

      fs.writeFile('./data/index.json', JSON.stringify(map), err => {
            if(err) {
                  throw new Error(err)
            }
      })
}

mapPattern(arrayOne, arrayTwo)

module.exports = mapPattern
