function gordon(a) {
  
  return a.split(" ").map(
    (element) =>
      element
        .toUpperCase()
        .replaceAll(/[aA]/g, "@")
        .replaceAll(/[eiouEIOU]/g, "*") + "!!!!").join(" ");
}
console.log(gordon("What feck damn cake"));
