function wordsToMarks(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let sum=0
  for(let elem of string){
    sum +=alphabet.indexOf(elem)+1
  }
  return sum
}
console.log(wordsToMarks("z"));
