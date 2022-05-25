

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

//initialize throttlePause variable outside throttle function
let throttlePause;
 
const throttle = (callback, time) => {
  if(throttlePause){
      return
  }
  throttlePause = true
  setTimeout(()=>{
      callback()
      throttlePause = false;
  },time)
};


//initialize throttlePause variable outside throttle function
// let throttlePause;
 
// const throttle = (callback, time) => {
//   //don't run the function if throttlePause is true
//   if (throttlePause) return;
 
//   //set throttlePause to true after the if condition. This allows the function to be run once
//   throttlePause = true;
   
//   //setTimeout runs the callback within the specified time
//   setTimeout(() => {
//     callback();
     
//     //throttlePause is set to false once the function has been called, allowing the throttle function to loop
//     throttlePause = false;
//   }, time);
// };