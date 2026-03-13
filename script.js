function peakAndValley(arr) {
  let newArr = [];
 
 for(let i=3;i<=arr.length-4;i++){
  if (
    arr[i] > arr[i - 1] &&
    arr[i] > arr[i - 2] &&
    arr[i] > arr[i - 3] &&
    arr[i] > arr[i + 1] &&
    arr[i] > arr[i + 2] &&
    arr[i] > arr[i +3]
  ){
    newArr.push(arr[i])
  }
  else if (
    arr[i] < arr[i - 1] &&
    arr[i] < arr[i - 2] &&
    arr[i] < arr[i - 3] &&
    arr[i] < arr[i + 1] &&
    arr[i] < arr[i + 2] &&
    arr[i] < arr[i + 3]
  ) {
    newArr.push(arr[i]);
  }
}
    return newArr;
 }

console.log(
  peakAndValley([
    10, 20, 30, 40, 30, 20, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13,
  ]),
);





// function peak(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i - 2] && arr[i] > arr[i - 3]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(
//   peakAndValley([
//     10, 20, 30, 40, 30, 20, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13,
//   ]),
// );

// function valley(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1] && arr[i] > arr[i + 2] && arr[i] > arr[i + 3]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
