function calculate(a, operator, b) {
  let operators=["+" , "-", "*",  "/"]
  if(!operators.includes(operator)|| (operator==="/" && b===0))return null
  
    if(operator==="+")return a+b
    if(operator==="-")return a-b
    if(operator==="*")return a*b
  
  return a/b
}
console.log(calculate(2, "*", 2));
