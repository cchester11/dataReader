const controller = new AbortController()
const signal = controller.signal

// function abortFetching() {
//       console.log('Now aborting');
//       // Abort.
//       controller.abort()
// }

const generateDataBtn = async () => {
      await fetch('http://localhost:3001/generate', {
            method:'get',
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
}
