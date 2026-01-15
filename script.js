function reverseLetter(str) {
  
  return str
    .split("")
    .reverse()
    .filter((char) => /[a-z]/i.test(char))
    .join("");
}
console.log(reverseLetter("hd64hd;"));
