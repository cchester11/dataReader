// this file just needs to reinitialize the function which creates our json
// then redirect us to the index page which will take care of the rest
const generateDataBtn = document.querySelector('#generateResults')
const controller = new AbortController()
const signal = controller.signal

// function abortFetching() {
//       console.log('Now aborting');
//       // Abort.
//       controller.abort()
// }

generateDataBtn.addEventListener('click', () => {
      fetch('localhost:3001/generate', {
            method: 'get',
            signal: signal
      })
      .then(() => {
            document.location.replace('/')
            controller.abort()
      })
      .catch(err => {
            if(err) {
                  throw new Error(err)
            }
      })
})
