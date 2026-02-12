function multipleOfIndex(array) {
let newArray=[]
  for(let elem=0;elem<array.length;elem++){
    if(array[elem]%elem===0){
      newArray.push(array[elem])
    }
  }
  return newArray
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
