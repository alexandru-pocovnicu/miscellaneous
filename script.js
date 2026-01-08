function doubleChar(str) {
  //const arr=str.split("")
  return str.split("").map(x=>x.repeat(2)).join("")
}
console.log(doubleChar("Hello"));
