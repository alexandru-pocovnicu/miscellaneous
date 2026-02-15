function digitize(n) {
  return [...String(n)].reverse().map(x=>+x)
}
console.log(digitize(35231));
