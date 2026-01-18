function add(num1, num2) {
  let arr1 = num1.toString();
  let arr2 = num2.toString();
  const longerLength = Math.max(arr1.length, arr2.length);
  
 arr1 = arr1.padStart(longerLength, "0");
 arr2 = arr2.padStart(longerLength, "0");
  let sum=[]
  for (let i = 0; i < longerLength; i++) {
    sum.push(+arr1[i] + +arr2[i]);
  }
  return sum.join('')
}
console.log(add(2, 11));
