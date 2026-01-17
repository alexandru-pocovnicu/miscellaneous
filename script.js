function twoSort(s) {
  return s.sort()[0].split('').map(element=>element+"***").join("").slice(0,-3)
}
console.log(
  twoSort([
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
    "bitcoin"
  ]),
);
