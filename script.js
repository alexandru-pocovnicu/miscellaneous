function pipeFix(numbers) {
  let arr=[]
  for(let i=numbers[0];i<numbers[numbers.length-1];i++){
    arr.push(i+1)
  }
  let newArray=[]
  newArray[0] = numbers[0];
  return  newArray.concat(arr)
}
console.log(pipeFix([1,2,3,5,6,8,9]))
