function stringClean(s) {
  return s.split("").filter((element) => !element.match(/\d+/)).join("");
}
console.log(stringClean("(E3at m2e2!!)"));
