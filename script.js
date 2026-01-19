function minMax(arr) {
  arr.sort((a,b)=>a-b)
  return [arr.at(0),arr.at(arr.length-1)]
}
console.log(minMax([1, 2, 3,98, 4, 5]));

