function findDifference(a, b) {
  const volumeA=a.reduce((acc,cur)=>acc*cur,1)
  const volumeB = b.reduce((acc, cur) => acc * cur, 1);
  return Math.abs(volumeA-volumeB)
}
