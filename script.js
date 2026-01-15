function dnaStrand(dna) {
return [...dna]
  .map((char) =>
    char === "T" ? "A" : char === "A" ? "T" : char === "C" ? "G" : "C"
  )
  .join("");
}
console.log(dnaStrand("CTAG"));
