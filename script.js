function arr2bin(arr) {
  
// if(arr.length===0) return "0"
// if (arr.includes(NaN)) return NaN;
//const filteredArr=arr.filter(x=>typeof x==="number")
return arr.length === 0
  ? "0"
  : arr.includes(NaN)
    ? NaN
    : arr.filter((x) => typeof x === "number").length === 0
      ? "0"
      : arr
          .filter((x) => typeof x === "number")
          .reduce((x, y) => x + y)
          .toString(2);

}
console.log(arr2bin([1,2,3,4,5,{}]));
