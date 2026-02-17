function maxProduct(a) {
  return a.splice(a.indexOf(Math.max(...a)),1)*Math.max(...a)
}
console.log(maxProduct([2, 6, 3]));
