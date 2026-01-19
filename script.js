function abbrevName(name) {
  return name.split(" ").map(element=>element[0]+element[element.length-1]);
}
console.log(abbrevName("Sam Harris"));
