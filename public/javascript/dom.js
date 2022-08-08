const data_total = document.getElementById('data_total')
const data_here = document.getElementById('data_here')

const controller = new AbortController()
const signal = controller.signal

const printNumbers = async () => {
      await fetch("http://localhost:3001/api/data")
            .then(res => {
                  if (!res.ok) {
                        return alert(`Error: ${res.statusText}`)
                  }
                  return res.json()
            })
            .then(data => {
                  console.log('successfully pulled database..populating dom fields')
                  Object.keys(data).forEach((key) => {
                        if (key === 'total') {
                              let masterForTotal = document.createElement('div')
                              let bodyOfTotal = document.createElement('h3')
                              let bodyOfText = document.createElement('div')
                              let bodyText = document.createElement('p')

                              masterForTotal.setAttribute('class', 'card')
                              bodyOfTotal.setAttribute('class', 'card-header')
                              bodyOfText.setAttribute('class', 'list-group list-group-flush')
                              bodyText.setAttribute('class', 'list-group-item')

                              bodyOfTotal.textContent = 'Total'
                              bodyText.textContent = 'total'

                              data_total.appendChild(masterForTotal)
                              masterForTotal.appendChild(bodyOfTotal)
                              bodyOfTotal.appendChild(bodyOfText)
                              bodyOfText.appendChild(bodyText)
                        }
                        let masterForItem = document.createElement('div')
                        let bodyOfItem = document.createElement('div')
                        let bodyText = document.createElement('div')

                        let itemNumber = document.createElement('h3')
                        let itemAppearances = document.createElement('p')
                        let itemArrays = document.createElement('p')
                        let indexOfOne = document.createElement('p')
                        let indexOfTwo = document.createElement('p')

                        itemNumber.textContent = 'Item: ' + data[key].item
                        itemAppearances.textContent = 'Number of Appearances: ' + data[key].appearances
                        itemArrays.textContent = 'Arrays Present: ' + data[key].arrays_present
                        indexOfOne.textContent = 'Index Of Presence in Array One: ' + data[key].indexes.index_of_one
                        indexOfTwo.textContent = 'Index of Presence in Array Two: ' + data[key].indexes.index_of_two

                        masterForItem.setAttribute('class', 'card')
                        itemNumber.setAttribute('class', 'card-header')
                        // itemNumber.setAttribute('class', 'bg-primary')
                        bodyOfItem.setAttribute('class', 'list-group list-group-flush')
                        bodyText.setAttribute('class', 'list-group-item')
                        // masterForItem.setAttribute('class', 'bg-info')

                        data_here.appendChild(masterForItem)
                        masterForItem.appendChild(bodyOfItem)
                        bodyOfItem.appendChild(itemNumber)
                        bodyOfItem.appendChild(bodyText)
                        bodyText.appendChild(indexOfTwo)
                        bodyText.appendChild(indexOfOne)
                        bodyText.appendChild(itemArrays)
                        bodyText.appendChild(itemAppearances)
                  })
            })
}

const generateNewData = async () => {
      await fetch('http://localhost:3001/api/generate', {
            method: 'get',
            signal: signal
      })
            .then(() => {
                  document.location.reload(true)
                  printNumbers()
                  controller.abort()
            })
            .catch(err => {
                  if (err) {
                        throw new Error(err)
                  }
            })
}

printNumbers()
