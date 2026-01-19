function divisibleBy(numbers, divisor) {
  let arr=[]
  for(let element of numbers){
    if(element%divisor===0){
      arr.push(element)
    }
  }
  return arr
}
