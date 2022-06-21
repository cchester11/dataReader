// import data
// connect to search element
// grab value from search element
// reference search value with database in fetch request
// send back data if match in container
const searchBtn= document.querySelector('#searchBtn')
let searchBar = document.getElementById('searchBar')

searchBtn.addEventListener('click', async () => {
      let text = searchBar.value
      const data = await fetch('http://localhost:3001/data')

      data.json()
      .then(res => {
            const database = Object.entries(res) 

            for(let i = 0; i < database.length; i ++) {
                  let curr = database[i][0]
                  
                  // not sure what to do here
            }
      })
})

// function findSearchRequest (key, text) {
//       if(key = text) {
//             return key
//       }
// } 

