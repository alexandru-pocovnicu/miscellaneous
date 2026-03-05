function adjacentElementsProduct(array) {
  let newArray=[]

    newArray=array.map((elem,index)=>elem*array[index+1])
  
  return newArray.sort((a,b)=>b-a)[0]
}
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]));

