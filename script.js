function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a,s)=>a+s); //something went wrong
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
