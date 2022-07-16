const data_here = document.getElementById('data_here')

const printNumbers = async () => {
      const data = await fetch("http://localhost:3001/data")
      data.json().then(res => {
            console.log('successfully pulled database')
            Object.keys(res).forEach(( key ) => {
                  let masterForItem = document.createElement('div')
                  let bodyOfItem = document.createElement('div')
                  let bodyText = document.createElement('div')

                  let itemNumber = document.createElement('h3')
                  let itemAppearances = document.createElement('p')
                  let itemArrays = document.createElement('p')
                  let indexOfOne = document.createElement('p')
                  let indexOfTwo = document.createElement('p')

                  itemNumber.textContent = 'Item: ' + res[key].item
                  itemAppearances.textContent = 'Number of Appearances: ' + res[key].appearances 
                  itemArrays.textContent = 'Arrays Present: ' + res[key].arrays_present
                  indexOfOne.textContent = 'Index Of Presence in Array One: ' + res[key].indexes.index_of_one
                  indexOfTwo.textContent = 'Index of Presence in Array Two: ' + res[key].indexes.index_of_two

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

printNumbers()
