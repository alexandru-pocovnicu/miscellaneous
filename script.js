function findAverage(array) {
  // your code here
  return array.length===0 ? 0 : array.reduce((acc,cur)=>acc+cur)/array.length
}
