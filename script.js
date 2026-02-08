function position(letter) {
  let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}
console.log(position("k"));
