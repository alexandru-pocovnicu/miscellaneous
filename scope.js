function addExtra(listOfNumbers) {
  let newArr=[...listOfNumbers]
  newArr.push(9);
  return newArr
}
console.log(addExtra([1,2,3]));
