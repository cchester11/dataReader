const controller = new AbortController()
const signal = controller.signal

// delete all lines and just send the html file

const generateDataBtn = async () => {
      await fetch('http://localhost:3001/api/generate', {
            method:'get',
            signal: signal
      })
      .then(() => {
            controller.abort()
            document.location.replace('/index')
      })
      .catch(err => {
            if(err) {
                  throw new Error(err)
            }
      })
}
