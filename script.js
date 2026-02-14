function slope(points) {
 
  let slope= (points[3]-points[1])/(points[2]-points[0])
  return points[2] - points[0]===0? "undefined":String(slope)
}
console.log(slope([-10, 6, -10, 3]));

