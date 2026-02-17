function gimme(triplet) {
  let sortedArray=[...triplet].sort((a,b)=>a-b)
  let middle=sortedArray[1]
  return getIndex(triplet,middle)
}


function getIndex(array,element){
  let indexPosition=0
for(let index in array){
  if(array[index]===element){
    indexPosition=index
  }
}
return +indexPosition
}

