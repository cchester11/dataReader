// this file just needs to reinitialize the function which creates our json
// then redirect us to the index page which will take care of the rest
const generateDataBtn = document.querySelector('#generateResults')
const writeJSON = require('../../writeJSON')
generateDataBtn.addEventListener('click', () => {
      writeJSON()
      document.location.replace('/')
})
