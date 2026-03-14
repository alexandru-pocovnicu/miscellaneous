function decode(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const reversedAlphabet = [...alphabet].reverse();
  let newMessage = "";
  for (let i = 0; i < message.length; i++) {
    let elem = message[i];

    let index = alphabet.indexOf(elem);
    if(index!==-1){
    newMessage += reversedAlphabet[index];
    }
    if(index===-1){
      newMessage+=elem
    }
  }
  return newMessage;
}
console.log(decode("srsvoolr slkv mlylwb wvxlwvh gsrh nvhhztv"));
