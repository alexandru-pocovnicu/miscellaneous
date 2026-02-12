function derive(coefficient, exponent) {
  let multiplication=coefficient*exponent
  let substraction=exponent-1
  return `${multiplication}x^${substraction}`
}
