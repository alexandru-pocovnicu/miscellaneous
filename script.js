function gimme(triplet) {
  const sortedTriplet= [...triplet].sort((a,b)=>a-b)
  return triplet.indexOf(sortedTriplet[1])
}
console.log(gimme([5,9,1]));
