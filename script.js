function validatePIN(pin) {
  return /^\d+$/.test(pin) && (pin.split('').length===4 ||pin.split('').length===6) ;
}
console.log(validatePIN("12345i"));
