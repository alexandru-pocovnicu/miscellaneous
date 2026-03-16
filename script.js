function breachAttempts(hackers, securityLevel, increase) {
  let sum = 0;
  let level = securityLevel;
  for (let i = 0; i < hackers.length; i++) {
    if (hackers[i] > level) {
      sum += 1;
    } else if (hackers[i] <= level) {
      level += increase;
    }
  }
  return sum;
}
console.log(breachAttempts([7, 6, 8, 9], 6, 2));
