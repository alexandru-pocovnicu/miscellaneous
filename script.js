// return masked string
function maskify(cc) {
  const newStr=cc.substring(0,cc.length-4)
  const mapped=[...newStr].map(x=>x.replace(x,"#")).join("")
  
  return mapped.concat(cc.substring( cc.length - 4));
}
console.log(maskify("4556364607935616"));
