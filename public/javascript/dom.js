const data = require('../../dist/index.json')
const data_here = document.getElementById('data_here')

const printNumbers = () => {
      for(let i = 0; i < data.length; i ++) {
            let newItem = document.createElement('li')
            newItem.textContent = data[i].item

            data_here.appendChild(newItem)
      }
}

printNumbers()
