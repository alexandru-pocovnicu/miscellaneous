function contamination(text, char) {
  return !text || !char? "":Array(text.length).fill(char).join("")
}
console.log(contamination("cty","r"));
