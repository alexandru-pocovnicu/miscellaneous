function calculateYears(principal, interest, tax, desired) {
  let sum = 0;
  
for(i=0;principal<desired;i++){
  const interestEarned=principal*interest
  const taxPayed=interestEarned*tax
  const netInterest=interestEarned-taxPayed
  let newPrincipal=principal+netInterest
  principal=newPrincipal
  sum +=1
}
  return sum
}
console.log(calculateYears(1000, 0.05, 0.18, 1100));
