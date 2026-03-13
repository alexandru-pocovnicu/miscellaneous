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







