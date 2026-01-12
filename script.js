var capitals = function (word) {
  const arr=word.split('')
  let arrOfIndexes=[]
  arr.forEach((value,index)=>{
    if(value===value.toUpperCase()){
      arrOfIndexes.push(index)
    }
  })
  return arrOfIndexes
};
console.log(capitals("CodEWaRs"));
