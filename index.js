var arr = [1,2,3,4,5]

for(var i=0; i<arr.length; i++){
  setTimeout(()=>console.log(arr[i],i),i*1000)
}

console.log('value of i after for loop',i)