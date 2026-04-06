function usdcny(usd) {
  let yuan=usd*6.75
  if(Number.isInteger(yuan)){
    return `${yuan}.00 Chinese Yuan`; 
  }
  return `${yuan.toFixed(2)} Chinese Yuan` 
}
console.log(usdcny(7298));
