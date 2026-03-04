function change(str) {
  let string=str.toLowerCase()
  let arr= new Array(26).fill(0)
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for(let i in string){
    if(alphabet.includes(string[i])){
      let index=alphabet.indexOf(string[i])
      arr[index]=1
    }
  }
  return arr.join("")
}
console.log(change("Abc e  $$  z"));
