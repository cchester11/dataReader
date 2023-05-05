const data_total = document.getElementById('data_total')
const data_here = document.getElementById('data_here')

const controller = new AbortController()
const signal = controller.signal

let localMap = {}

function saveMap(data) {
      localStorage.setItem('localMap', JSON.stringify(data))
}

async function onReload() {
      // map does successfully get parsed
      // const map = JSON.parse(localStorage.getItem('localMap'))

      data_total.replaceChildren();
      data_here.replaceChildren();

      const data = await fetch('https://datareader-development.up.railway.app/api/data', {
            method: 'get',
            signal: signal
      })

      data.json()
      .then(data => {
            Object.keys(data).forEach((key) => {
                  if (key === 'total') {
                        let masterForTotal = document.createElement('div')
                        let containerForTotal = document.createElement('div')
                        let subContainerForTotal = document.createElement('div')
                        let totalHeader = document.createElement('h3')
                        let totalText = document.createElement('h4')

                        masterForTotal.setAttribute('class', 'card')
                        containerForTotal.setAttribute('class', 'list-group list-group-flush')
                        totalHeader.setAttribute('class', 'card-header')
                        subContainerForTotal.setAttribute('class', 'list-group-item')

                        totalHeader.textContent = 'Total'
                        totalText.textContent = "Data set includes " + data[key] + " numbers"

                        data_total.appendChild(masterForTotal)
                        masterForTotal.appendChild(containerForTotal)
                        containerForTotal.appendChild(totalHeader)
                        containerForTotal.appendChild(subContainerForTotal)
                        subContainerForTotal.appendChild(totalText)
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
                  bodyOfItem.setAttribute('class', 'list-group list-group-flush')
                  itemNumber.setAttribute('class', 'card-header')
                  // itemNumber.setAttribute('class', 'bg-primary')
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
      await fetch('https://datareader-development.up.railway.app/api/generate', {
            method: 'get',
            signal: signal
      })
            .then(res => {
                  if (!res.ok) {
                        return alert('Error: ' + res.statusText)
                  }
                  const data = res.json()
                  return data
            })
            .then(data => {
                  localMap = { data }
                  // map is successfully saved
                  saveMap(localMap)

                  data_total.replaceChildren();
                  data_here.replaceChildren();

                  console.log('successfully pulled database..populating dom fields')

                  Object.keys(data).forEach((key) => {
                        if (key === 'total') {
                              let masterForTotal = document.createElement('div')
                              let containerForTotal = document.createElement('div')
                              let subContainerForTotal = document.createElement('div')
                              let totalHeader = document.createElement('h3')
                              let totalText = document.createElement('h4')

                              masterForTotal.setAttribute('class', 'card')
                              containerForTotal.setAttribute('class', 'list-group list-group-flush')
                              totalHeader.setAttribute('class', 'card-header')
                              subContainerForTotal.setAttribute('class', 'list-group-item')

                              totalHeader.textContent = 'Total'
                              totalText.textContent = "Data set includes " + data[key] + " numbers"

                              data_total.appendChild(masterForTotal)
                              masterForTotal.appendChild(containerForTotal)
                              containerForTotal.appendChild(totalHeader)
                              containerForTotal.appendChild(subContainerForTotal)
                              subContainerForTotal.appendChild(totalText)
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
                        bodyOfItem.setAttribute('class', 'list-group list-group-flush')
                        itemNumber.setAttribute('class', 'card-header')
                        // itemNumber.setAttribute('class', 'bg-primary')
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
