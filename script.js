function twistedSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (n > 9) {
      let arr = String(i).split("");

      let addedI = arr.reduce((a, b) =>+a + Number(b),0);
      
      
      sum = sum + addedI;
    } else {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(twistedSum(12));

function over9(n) {
  if (n > 9) return true;
  return false;
}
