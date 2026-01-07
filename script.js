function century(year) {
  if(year.length===2){
    return 1
  }
  if(year.toString().slice(-2)==="00"){
    return Number(year.toString().slice(0,-2));
  }
  return Number(year.toString().slice(0, -2))+1;
}
console.log(century(201));
