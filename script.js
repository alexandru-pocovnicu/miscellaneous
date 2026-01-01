function sumMix(x) {
  
  return x.reduce((acc,cur)=>acc+ Number(cur),0)
}
console.log(sumMix([1,"4"]));
