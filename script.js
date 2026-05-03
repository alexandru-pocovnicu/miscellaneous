function solution(str) {
  let strLength = str.length;
  let arr = [...str];
  let newArr = [];
  for (let i = 0; i < strLength; i += 2) {
    if (!arr[i + 1]) {
      arr[i + 1] = "_";
    }
    newArr.push(arr[i].concat(arr[i + 1]));
  }
  return newArr;
}
