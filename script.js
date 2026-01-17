function findMultiples(integer, limit) {
  const listLength=limit/integer
  let arr=[]
  for(let i=1;i<=listLength;i++){
    arr.push(integer*i)
  }
  return arr
}
console.log(findMultiples(5,25));
