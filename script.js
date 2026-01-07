function betterThanAverage(classPoints, yourPoints) {
  const points=classPoints.reduce((acc,curr)=>acc+curr,0)
  console.log(points);
  
  return yourPoints>(points+yourPoints)/(classPoints.length+1)
}
console.log(betterThanAverage([2,3],5));
