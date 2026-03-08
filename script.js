function addedChar(s1, s2) {
  let s11 = [...s1].sort();
  let s22 = [...s2].sort();
  return s22.find((el, i) => el !== s11[i]);
}
