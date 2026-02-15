function sameCase(a, b) {
  let charA=/^[a-zA-Z]$/.test(a) 
  let charB = /^[a-zA-Z]$/.test(b); 
  if(charA===false || charB===false){
    return -1
  }
  let caseA=a===a.toUpperCase()
  let caseB = b === b.toUpperCase();
  return caseA===caseB ? 1:0;
}
console.log(sameCase("d",1));
