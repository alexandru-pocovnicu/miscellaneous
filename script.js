function solve(arr) {
 let reverseArr=arr.reverse()
 let set=new Set(reverseArr)
  return [...set].reverse()
}
console.log(solve([1,5,9,1,7]));
