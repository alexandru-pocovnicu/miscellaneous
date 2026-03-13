function howManySmaller(arr, n) {
  let newArr=arr.map(x=>+x.toFixed(2))
  let count=0
  for(let elem of newArr){
    if(elem<n){
      count++
    }
  }
  return count
}
console.log(howManySmaller([1.234, 1.235, 1.228],1.24));
