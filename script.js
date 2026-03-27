
function calculator(a, b, sign) {
  let signs=["+","-","*","/"]
  if(typeof a!=="number"||typeof b!=="number"||!signs.includes(sign)){
    return "unknown value";
  }
  if(b===0 && sign==="/"){
    return Infinity
  }
  let result;
  switch (sign){
    case "+":
      result=a+b;
      break;
    case "-":
      result=a-b;
      break;
    case "*":
      result=a*b;
      break;
    case "/":
      result=a/b;
    
  }
return result
}
console.log(calculator(6,2,"/"));
