function isTriangle(a, b, c) {
  
  if(Math.max(a,b,c)>=(a+b+c)/2)return false
  return true
}
console.log(isTriangle(7,9,5));
