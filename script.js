function arrayPlusArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((x) => !Number.isNaN(x))
    .filter((x) => +x)
    .reduce((a, s) => a + s); 
}
console.log(arrayPlusArray([1, 2, 3], [4, 5,NaN,6,"k",[1,2]]));
