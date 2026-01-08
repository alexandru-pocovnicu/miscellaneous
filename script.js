function rentalCarCost(d) {
  // let price=0
  // if(d>=7){
  //  return price=d*40-50
  // }else if(d>=3){
  //   return price=d*40-20
  // }
  // return d*40
  return d>=7 ? d*40-50:d>=3 ? d*40-20:d*40
}
console.log(rentalCarCost(3));
