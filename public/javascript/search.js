const searchBtn= document.querySelector('#searchBtn')
const searchBar = document.getElementById('searchBar')
const searchResults = document.getElementById('searchResults')

searchBtn.addEventListener('click', async () => {
      let text = searchBar.value
      const data = await fetch('http://localhost:3001/data')

      data.json()
      .then(res => {
            const database = Object.entries(res) 

            const findSearchRequest = function () {
                  for(let i = 0; i < database.length; i ++) {
                        if(database[i][0] === text) {
                              const results = JSON.stringify(database[i])
                              searchResults.textContent = results

                              searchBar.value = ''

                              return
                        }
                  }

                  window.alert("We could not find the number you've searched for in our database")
                  searchBar.value = ''
            }

            findSearchRequest()
      })
})

