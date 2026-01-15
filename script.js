function printerError(s) {
 const denominator=s.length
 let numerator=0
for( let char of s){
  if(char >="n" && char<="z"){
    numerator +=1
  } 
}
 return `${numerator}/${denominator}`
}
console.log(printerError("fffsss"));
