function mergeArrays(arr1, arr2) {
  
  return [...new Set(arr1.concat(arr2).sort((a, b) => a - b))];
}
console.log(mergeArrays([1, 2, 3, 4], [9, 9, 7, 5]));
