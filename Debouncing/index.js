

async  function search() {
    try {
        const search_name = document.getElementById('searchText').value
        const data = await fetch(`https://api.unsplash.com/search/photos?per_page=28&query=${search_name}&client_id=8lBaqc-XJTCXhnwvlftCl7DNmzD3HU9CsGnMNyaHxMo`)
        const result = await data.json();
        return result.results
    } catch (error) {
        console.log(error)
    }
    
}
async function main(){
    const data = await search()
//console.log(data)
    append(data)
}

function append(data){
    document.getElementById('searchContentDiv').textContent=''
    data.map((e)=>{
        let p = document.createElement('p')
        p.textContent = e.alt_description

        document.getElementById('searchContentDiv').append(p)
    })
}

let timeID
function debounce(func,delay){
  if(timeID){
      clearTimeout(timeID)
  }  
  timeID = setTimeout(()=>{
    func()
  },delay)
    
}