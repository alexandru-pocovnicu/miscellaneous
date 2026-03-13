function fiveLine(s) {
 let trimmedS= s.trim();
 let arr=[]
 for(let i=1;i<=5;i++){
  arr.push(trimmedS.repeat(i))
 }

 return arr.join("\n")
}
console.log(fiveLine("  a"));
