function solve(s) {
  let upper = 0;
  let lower = 0;
  const arrS = s.split("");
  for (let elem of arrS) {
    if (elem === elem.toUpperCase()) {
      upper += 1;
    } else {
      lower += 1;
    }
  }
  return upper > lower ? s.toUpperCase() : s.toLowerCase();
}
console.log(solve("COdE"));
