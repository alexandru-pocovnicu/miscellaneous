function stray(numbers) {
  const sortedNumbers=numbers.sort()
  const aStray=numbers.filter((element)=>element!==numbers[1])
  
  
  return aStray[0]
}
console.log(stray([1,1,1,4]));
