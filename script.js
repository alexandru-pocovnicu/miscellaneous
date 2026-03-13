function alienLanguage(str) {
  let capitalLetters=str.toUpperCase()
  let arr=capitalLetters.split(" ")
  
  return arr.map(x=>x.slice(0,-1)+x[x.length-1].toLowerCase()).join(" ")
}
console.log(alienLanguage("My name is John"));
