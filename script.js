function findAverage(nums) {
  const sum= nums.reduce((acc,curr)=>(acc+curr))
  return sum/nums.length
}
