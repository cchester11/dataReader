// this file just needs to reinitialize the function which creates our json
// then redirect us to the index page which will take care of the rest
const generateDataBtn = document.querySelector('#generateResults')

generateDataBtn.addEventListener('click', () => {
      document.location.replace('/')
})
