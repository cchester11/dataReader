const data_here = document.getElementById('data_here')

const printNumbers = async () => {
      const data = await fetch("http://localhost:3001/data")
      data.json().then(res => {
            Object.keys(res).forEach(( key ) => {
                  let newItem = document.createElement('li')
                  newItem.textContent = res[key].item
      
                  data_here.appendChild(newItem)
            })
      })
      
}

printNumbers()
