
function squaresOnly(a) {
  let y = [];
  for (let x of a) {
    if (Number.isInteger(Math.sqrt(x))) {
      y.push(x);
    }
  }
  return y;
}
