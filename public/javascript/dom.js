const data = require('../../data/index.json')
const data_here = document.getElementById('data_here')

const printNumbers = () => {
      Object.keys().forEach(( key ) => {
            let newItem = document.createElement('li')
            newItem.textContent = data[key].item

            data_here.appendChild(newItem)
      })
}

printNumbers()
