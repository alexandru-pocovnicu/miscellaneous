function sumDigits(number) {
  return String(Math.abs(number))
    .split("")
    .map((y) => Number(y))
    .reduce((acc, cur) => acc + cur);
}
console.log(sumDigits(-45));
