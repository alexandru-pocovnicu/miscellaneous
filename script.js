function smallEnough(a, limit) {
  const isBelowLimit=curr=>curr<=limit
  return a.every(isBelowLimit)
}
console.log(smallEnough([9, 5, 0, 0, 3, 3, 9, 9, 0, 2, 7, 7, 2], 9));
