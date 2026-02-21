function uniqueSum(lst) {
  if(lst.length===0)return null
 return [...new Set(lst)].reduce((a,b)=>a+b)
}
console.log(uniqueSum([-1, -1, 5, 2, -7]));
