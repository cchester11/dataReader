const searchBtn = document.querySelector('#searchBtn')
const searchBar = document.getElementById('searchBar')
const searchResults = document.getElementById('searchResults')
const itemName = document.getElementById('itemName')
const appearances = document.getElementById('appearances')
const arraysPresent = document.getElementById('arraysPresent')
const indexOfOne = document.getElementById('indexOfOne')
const indexOfTwo = document.getElementById('indexOfTwo')
const hideResultsBtn = document.getElementById('hideResultsBtn')

searchBtn.addEventListener('click', async () => {
      let text = searchBar.value
      let data;
      // if(process.env.NODE_ENV === 'development') {
      //       data = await fetch('https://datareader-development.up.railway.app/api/data')
      // } else if(process.env.NODE_ENV === 'local') {
      //       data = await fetch('http://localhost:3001/api/data')
      // }
      data = await fetch('/api/data', {
            method: 'get'
      })

      data.json()
            .then(res => {
                  const database = res

                  const findSearchRequest = function () {
                        const result = database[text];
                        if (!result) {
                              window.alert("We could not find the number you've searched for in our database")
                              searchBar.value = ''
                        }
                        itemName.textContent = 'Item Name: ' + result.item
                        appearances.textContent = 'Number of Appearances: ' + result.appearances
                        arraysPresent.textContent = 'Arrays Present: ' + result.arrays_present
                        indexOfOne.textContent = 'Index Location in Array One: ' + result.indexes.index_of_one
                        indexOfTwo.textContent = 'Index Location in Array Two: ' + result.indexes.index_of_two

                        searchResults.setAttribute('style', 'display: flex')
                        searchBar.value = ''
                  }

                  hideResultsBtn.addEventListener('click', () => {
                        itemName.textContent = ''
                        appearances.textContent = ''
                        arraysPresent.textContent = ''
                        indexOfOne.textContent = ''
                        indexOfTwo.textContent = ''
                        searchResults.setAttribute('style', 'display: none')
                  })

                  findSearchRequest()
            })
})

