function pigLatin(string) {
  if (![...string].every((x) => x.match(/[a-zA-Z]/))) return null;
  if(!/[aeiou]/i.test(string))return string.toLowerCase() + "ay";
  while(string[0].match(/[aeiou]/i)){
    return string.toLowerCase()+"way"
  }
  
  while (!(/[aeiou]/i.test(string[0]))) {
    string=string.slice(1)+string[0]

    
  }
  return string.toLowerCase() + "ay"
}
console.log(pigLatin("r2"));
