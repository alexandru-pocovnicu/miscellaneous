function ensureQuestion(s) {
  return s[s.length-1]==="?" ? s:s.padEnd(s.length+1,"?")
  //return s[s.length - 1];
}
console.log(ensureQuestion("kitty"));
