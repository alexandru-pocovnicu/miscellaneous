const reverseSeq = (n) => {
  let arrInt=[];
  for(let i=n;i>=1;i--){
    arrInt.push(i)
  }
  return arrInt
};
console.log(reverseSeq(5));
