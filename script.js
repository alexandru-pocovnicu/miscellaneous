function squareDigits(num) {
  return +[...String(num)].map((x)=>x**2).join("")
}
console.log(squareDigits(3212));
