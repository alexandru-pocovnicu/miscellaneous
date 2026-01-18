function validatePIN(pin) {
  return /^\d+$/.test(pin) && (pin.split('').length===4 ||pin.split('').length===6) && /^(?!.*(.).*\1).*$/.test(pin) ;
}
console.log(validatePIN("123455"));
