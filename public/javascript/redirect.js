const controller = new AbortController()
const signal = controller.signal

const redirect = async () => {
      document.location.replace('/index')
}
