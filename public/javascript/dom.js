const data_here = document.getElementById('data_here')

const printNumbers = async () => {
      const data = await fetch("http://localhost:3001/data")
      data.json().then(res => {
            Object.keys(res).forEach(( key ) => {
                  let masterForItem = document.createElement('div')
                  let itemNumber = document.createElement('h3')
                  let itemAppearances = document.createElement('li')
                  let itemArrays = document.createElement('li')
                  let indexOfOne = document.createElement('li')
                  let indexOfTwo = document.createElement('li')
                  itemNumber.textContent = 'Item: ' + res[key].item
                  itemAppearances.textContent = 'Number of Appearances: ' + res[key].appearances 
                  itemArrays.textContent = 'Arrays Present: ' + res[key].arrays_present
                  indexOfOne.textContent = 'Index Of Presence in Array One: ' + res[key].indexes.index_of_one
                  indexOfTwo.textContent = 'Index of Presence in Array Two: ' + res[key].indexes.index_of_two
                  
                  itemNumber.appendChild(indexOfTwo)
                  itemNumber.appendChild(indexOfOne)
                  itemNumber.appendChild(itemArrays)
                  itemNumber.appendChild(itemAppearances)
                  masterForItem.appendChild(itemNumber)
                  data_here.appendChild(masterForItem)
            })
      })
      
}

printNumbers()
