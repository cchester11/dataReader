const generateDataBtn = document.getElementById('generateResults')
const writeJSON = require('../../writeJSON')

function generateResults() {
      generateDataBtn.addEventListener('click', () => {
            writeJSON()
      })
}

generateResults()