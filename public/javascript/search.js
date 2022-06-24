const searchBtn = document.querySelector('#searchBtn')
const searchBar = document.getElementById('searchBar')
const searchResults = document.getElementById('searchResults')
const itemName = document.getElementById('itemName')

searchBtn.addEventListener('click', async () => {
      let text = searchBar.value
      const data = await fetch('http://localhost:3001/data')

      data.json()
            .then(res => {
                  const database = res

                  const findSearchRequest = function () {
                        const result = database[text];
                        if (!result) {
                              window.alert("We could not find the number you've searched for in our database")
                              searchBar.value = ''
                        }
                        itemName.textContent = result.item
                        searchResults.setAttribute('style', 'display: flex')
                        searchBar.value = ''
                  }

                  findSearchRequest()
            })
})

