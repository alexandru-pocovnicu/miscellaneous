Array.prototype.remove_ = function (integer_list, values_list)  {
  while(listContainsValue(integer_list, values_list)){
    removeElement(integer_list,values_list)
  }
  return integer_list
};


console.log([].remove_([1, 1, 2, 3, 1, 2, 3, 4], [5, 3]));


function listContainsValue(array1,array2){
  for(let element of array2){
    if(array1.includes(element)){
      return true
    }
  }
  return false
}


function removeElement(array1,array2){

  for(let element of array2){
    while(array1.includes(element)){
      array1.splice(array1.indexOf(element),1)
    }
  }
 
  return array1
}

